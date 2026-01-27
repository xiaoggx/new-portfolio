import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await query('SELECT 1');
        return NextResponse.json({ status: 'healthy', timestamp: new Date().toISOString() }, { status: 200 });
    } catch (err) {
        console.error('Health check failed:', err);
        return NextResponse.json({ status: 'unhealthy' }, { status: 503 });
    }
}
