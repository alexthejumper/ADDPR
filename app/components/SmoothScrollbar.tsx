"use client";

import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

interface SmoothScrollbarProps {
    children: React.ReactNode;
}

const SmoothScrollbar = ({ children }: SmoothScrollbarProps) => {
    const scrollbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let scrollbarInstance: Scrollbar | undefined;
        if (scrollbarRef.current) {
            scrollbarInstance = Scrollbar.init(scrollbarRef.current, {
                damping: 0.1, // Adjust for smoothness
                alwaysShowTracks: true,
            });
        }

        return () => {
            scrollbarInstance?.destroy();
        };
    }, []);

    return (
        <div ref={scrollbarRef} style={{ height: "100vh", overflow: "hidden" }}>
            {children}
        </div>
    );
};

export default SmoothScrollbar;
