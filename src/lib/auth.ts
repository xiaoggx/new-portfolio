import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Admin Login",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const adminUser = process.env.ADMIN_USER;
                const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
                const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

                if (!credentials?.username || !credentials.password) return null;

                let isValid = false;

                if (credentials.username === adminUser) {
                    if (adminPasswordHash && adminPasswordHash.startsWith('$2')) {
                        isValid = await bcrypt.compare(credentials.password, adminPasswordHash);
                    }
                }

                if (isValid) {
                    return { id: "1", name: "Admin", email: adminEmail }
                }
                return null
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            return session;
        },
        async jwt({ token, user }) {
            return token;
        }
    }
}
