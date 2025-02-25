import { useEffect } from 'react';

const bouncyButtonAnimation = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.bounce-in');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 200); // Staggered delay
                    } else {
                        entry.target.classList.remove('visible'); // Remove class when out of view
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default bouncyButtonAnimation;
