import { NextResponse } from 'next/server';
import { query, initDb } from '@/lib/db';

let isDbInitialized = false;

//rate limiting
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 50;

function getIp(req: Request) {
    const forwardedFor = req.headers.get('x-forwarded-for');
    return forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
}

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
        return true;
    }

    if (now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
        return true;
    }

    if (record.count >= MAX_REQUESTS) {
        return false;
    }

    record.count += 1;
    return true;
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export async function POST(request: Request) {
    try {
        const ip = getIp(request);
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Lazy init table
        if (!isDbInitialized) {
            await initDb();
            isDbInitialized = true;
        }

        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || typeof name !== 'string' || name.length < 2 || name.length > 100) {
            return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
        }
        if (!email || typeof email !== 'string' || !isValidEmail(email) || email.length > 255) {
            return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
        }
        if (!subject || typeof subject !== 'string' || subject.length < 2 || subject.length > 200) {
            return NextResponse.json({ error: 'Invalid subject' }, { status: 400 });
        }
        if (!message || typeof message !== 'string' || message.length < 10 || message.length > 5000) {
            return NextResponse.json({ error: 'Message must be between 10 and 5000 characters' }, { status: 400 });
        }

        const text = 'INSERT INTO messages(name, email, subject, message) VALUES($1, $2, $3, $4) RETURNING id, created_at';
        const values = [name, email, subject, message];

        await query(text, values);

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error saving message:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
