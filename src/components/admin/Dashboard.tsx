'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MagnifyingGlassIcon,
    TrashIcon,
    EnvelopeIcon,
    UserIcon,
    CalendarIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';

type Message = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
    read: boolean;
};

export default function Dashboard({ initialMessages, user }: { initialMessages: Message[], user: any }) {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [searchQuery, setSearchQuery] = useState('');
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const filteredMessages = useMemo(() => {
        if (!searchQuery) return messages;
        const lowerQuery = searchQuery.toLowerCase();
        return messages.filter(msg =>
            msg.name.toLowerCase().includes(lowerQuery) ||
            msg.email.toLowerCase().includes(lowerQuery) ||
            msg.subject.toLowerCase().includes(lowerQuery) ||
            msg.message.toLowerCase().includes(lowerQuery)
        );
    }, [messages, searchQuery]);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        setIsDeleting(id);
        try {
            const res = await fetch(`/api/messages?id=${id}`, { method: 'DELETE' });
            if (res.ok) {
                setMessages(prev => prev.filter(m => m.id !== id));
            } else {
                alert('Failed to delete message');
            }
        } catch (error) {
            console.error(error);
            alert('Error deleting message');
        } finally {
            setIsDeleting(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#130a1f] text-gray-100 font-sans selection:bg-emerald-500/30">
            {/* Header / Stats */}
            <div className="border-b border-white/10 bg-[#130a1f]/80 backdrop-blur-md sticky top-0 z-10">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Admin Dashboard
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">
                            Welcome back, <span className="text-emerald-400 font-medium">{user?.name}</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                            <EnvelopeIcon className="w-5 h-5 text-emerald-400" />
                            <span className="font-mono font-bold text-xl">{messages.length}</span>
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Messages</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                {/* Search Bar */}
                <div className="mb-8 relative max-w-xl">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by name, email, subject..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all font-light"
                    />
                    {searchQuery && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                                {filteredMessages.length} matches
                            </span>
                        </div>
                    )}
                </div>

                {/* Messages Grid */}
                <div className="grid grid-cols-1 gap-4">
                    <AnimatePresence>
                        {filteredMessages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group relative bg-[#1a1128] border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => handleDelete(msg.id)}
                                        disabled={isDeleting === msg.id}
                                        className="p-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                                        title="Delete Message"
                                    >
                                        {isDeleting === msg.id ? (
                                            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <TrashIcon className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-start gap-4 pr-12">
                                    {/* Avatar Placeholder */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg border border-emerald-500/30">
                                            {msg.name.charAt(0).toUpperCase()}
                                        </div>
                                    </div>

                                    <div className="flex-grow space-y-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                            <h3 className="text-xl font-semibold text-white/90 group-hover:text-emerald-300 transition-colors">
                                                {msg.subject}
                                            </h3>
                                            <span className="md:hidden text-xs text-gray-500 flex items-center gap-1">
                                                <CalendarIcon className="w-3 h-3" />
                                                {new Date(msg.created_at).toLocaleDateString()}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                                                <UserIcon className="w-4 h-4" />
                                                {msg.name}
                                            </div>
                                            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                                                <EnvelopeIcon className="w-4 h-4" />
                                                <a href={`mailto:${msg.email}`} className="hover:underline hover:text-emerald-400">
                                                    {msg.email}
                                                </a>
                                            </div>
                                            <div className="hidden md:flex items-center gap-1.5 ml-auto border-l border-white/10 pl-4">
                                                <CalendarIcon className="w-4 h-4" />
                                                {new Date(msg.created_at).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pl-0 md:pl-16">
                                    <p className="text-gray-300 leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">
                                        {msg.message}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredMessages.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            <p className="text-lg">No messages found matching "{searchQuery}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
