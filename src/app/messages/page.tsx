import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { query } from "@/lib/db"
import Dashboard from "@/components/admin/Dashboard"

export const dynamic = 'force-dynamic'

type Message = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
    read: boolean;
}

async function getMessages(): Promise<Message[]> {
    try {
        const res = await query('SELECT * FROM messages ORDER BY created_at DESC');
        return res.rows.map(row => ({
            ...row,
            created_at: row.created_at.toISOString(),
            read: row.read || false
        }));
    } catch (e) {
        console.error("Failed to fetch messages", e);
        return [];
    }
}

export default async function MessagesPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/api/auth/signin")
    }

    const messages = await getMessages();

    return <Dashboard initialMessages={messages} user={session.user} />
}
