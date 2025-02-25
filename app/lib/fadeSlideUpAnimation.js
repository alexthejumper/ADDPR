import { useEffect } from 'react';

const useFadeSlideUpAnimation = () => {
    useEffect(() => {
        const element = document.querySelector('.fade-slide-up');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-slide-up');
                } else {
                    entry.target.classList.remove('animate-fade-slide-up');
                }
            });
        }, {
            threshold: 0.5, // Trigger the animation when 50% of the element is visible
        });

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.disconnect();
            }
        };
    }, []);
};

export default useFadeSlideUpAnimation;
