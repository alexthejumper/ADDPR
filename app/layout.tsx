import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";

export const metadata: Metadata = {
    title: "Welcome to Our Church",
    description: "Join us for worship and fellowship every Sunday.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
        <Navbar />
        {children}
        </body>
        </html>
    );
}
