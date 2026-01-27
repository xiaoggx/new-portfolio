import { Certificate } from '@/types';

export const certificates: Certificate[] = [
    {
        id: 1,
        title: "IT Essentials",
        issuer: "Cisco Netacad",
        credentialUrl: "https://www.credly.com/badges/4456c216-7cc9-4d0c-bb6e-6541c619987f/public_url",
        skills: ["Hardware", "Software", "Networking Fundamentals", "Troubleshooting"]
    },
    {
        id: 2,
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco Netacad",
        credentialUrl: "https://www.credly.com/badges/dbccf53e-f811-415a-acf2-e42350fb2110/public_url",
        skills: ["Networking", "TCP/IP", "OSI Model", "IPv4/IPv6"]
    },
    {
        id: 3,
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco Netacad",
        credentialUrl: "https://www.credly.com/badges/7079b057-6590-48fd-97ca-d7fe53ceecc8/public_url",
        skills: ["VLANs", "Routing Protocols", "Wireless Networks", "Network Security"]
    },
    {
        id: 4,
        title: "Santander 2025 - Ciência de Dados com Python",
        issuer: "DIO",
        credentialUrl: "https://www.dio.me/certificate/PTNXVEQS/share",
        skills: ["Python", "Data Science", "Pandas", "Data Analysis"]
    }
];
