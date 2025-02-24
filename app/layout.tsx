import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import Preloader from "@/app/components/Preloader";

export const metadata: Metadata = {
    title: "ADD Petite Riviere",
    description: "Un lieu d’adoration, d’amour et d’unité – venez nous rejoindre ce dimanche !",
    keywords: [
        "Église chrétienne", "Assemblée de Dieu", "Petite Rivière",
        "Culte", "Prière", "Adoration", "Maurice", "Foi", "Bible", "Louange", "Adoration", "Jesus", "Dieu",
        "Sauveur", "L'Eternel", "Yeshua", "Vie", "Emmanuel", "Amour", "Unité"
    ],

    robots: "index, follow", // Allows search engines to index and follow links

    icons: {
        icon: "/icon-add.ico", // Standard favicon
        shortcut: "/icon-add.ico"
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
        <Preloader />
        <Navbar />
        {children}
        </body>
        </html>
    );
}
