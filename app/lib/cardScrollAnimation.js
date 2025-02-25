import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.cardcard');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-card');
                } else {
                    entry.target.classList.remove('animate-card');
                }
            });
        }, {
            threshold: 0.5, // Trigger animation when 50% of the card is in the viewport
        });

        cards.forEach(card => observer.observe(card));

        return () => {
            observer.disconnect();
        };
    }, []);
};

export default useScrollAnimation;
