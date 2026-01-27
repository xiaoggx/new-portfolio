import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function DELETE(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
        }

        const check = await query('SELECT id FROM messages WHERE id = $1', [id]);
        if (check.rowCount === 0) {
            return NextResponse.json({ error: 'Message not found' }, { status: 404 });
        }

        await query('DELETE FROM messages WHERE id = $1', [id]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to delete message:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
