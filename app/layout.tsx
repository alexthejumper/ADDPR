"use client";

import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
import Preloader from "@/app/components/Preloader";
import { usePathname } from "next/navigation";

interface LayoutProps {
    children: React.ReactNode;
}

// export default function RootLayout({ children }: { children: React.ReactNode }) {

//     return (
//         <html lang="en">
//         <Head>
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <meta name="color-scheme" content="light" />
//         </Head>
//         <body>
//         <Preloader />
//         <Navbar />
//         {children}
//         </body>
//         </html>
//     );
// }


const Layout = ({ children}: LayoutProps) => {

    const pathname = usePathname();

    const pageType = pathname === "/" ? "pageOne" : "pageTwo";
    const homeLink = pageType === "pageOne" ? "#home" : "/";

    return (
                <html lang="en">
                 <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                     <meta name="color-scheme" content="light" />
                 </Head>
                 <body>
                 <Preloader />
                 <Navbar homeLink={homeLink} />
                 {children}
                 </body>
                 </html>
             );
};

export default Layout;
