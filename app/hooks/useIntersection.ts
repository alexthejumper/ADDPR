import { useEffect, useState } from "react";

export function useIntersection(ref: React.RefObject<HTMLElement>, threshold: number = 0.2) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element); // Unobserve after first appearance
                }
            },
            { threshold }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return isVisible;
}