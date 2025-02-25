import { useEffect } from 'react';

const useFadeInMap = () => {
    useEffect(() => {
        const mapElement = document.querySelector('.fade-in-map');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.5, // Trigger when 50% of the element is visible
        });

        if (mapElement) {
            observer.observe(mapElement);
        }

        return () => {
            if (mapElement) {
                observer.disconnect();
            }
        };
    }, []);
};

export default useFadeInMap;
