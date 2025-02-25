import { useEffect } from 'react';

const useFormFadeSlideUp = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.form-fade-slide-up');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 200); // Staggered delay
                    }
                    else {
                        entry.target.classList.remove('visible');
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

export default useFormFadeSlideUp;
