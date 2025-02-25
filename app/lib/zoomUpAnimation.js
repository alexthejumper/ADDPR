import { useEffect } from 'react';

const useZoomUpAnimation = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.zoom-up');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-zoom-up');
                } else {
                    entry.target.classList.remove('animate-zoom-up');
                }
            });
        }, {
            threshold: 0.7, // Trigger the animation when 50% of the element is visible
        });

        elements.forEach(element => observer.observe(element));

        return () => {
            elements.forEach(element => observer.disconnect());
        };
    }, []);
};

export default useZoomUpAnimation;
