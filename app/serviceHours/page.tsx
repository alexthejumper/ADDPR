"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceHours() {
    const contentRef = useRef<HTMLElement>(null);  // Specify the type of the ref

    useEffect(() => {
        if (contentRef.current) {
            const elements = contentRef.current.children;
            gsap.fromTo(
                elements,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.3, // Delay between each line
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);


    return (
        <section className="section2 p-10 bg-gray-100">
            <div ref={contentRef} className="text-center bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold">Church Service Hours</h2>
                <p>Sunday: 10:00 AM - 12:00 PM</p>
                <p>Wednesday: 7:00 PM - 8:30 PM</p>
                <p>Friday: 6:30 PM - 8:00 PM</p>
            </div>
        </section>
    );
}
