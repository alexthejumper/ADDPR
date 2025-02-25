import { useState, useEffect } from 'react';

const bouncyButtonTopAnimation = () => {
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        const elements = document.querySelectorAll('.bounce-in-top');

        // Check if it's the first render
        if (firstLoad) {
            // Set a timeout of 5 seconds before starting the observer logic
            setTimeout(() => {
                setFirstLoad(false);  // Set firstLoad to false after 5 seconds
            }, 5000);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Apply a 5-second delay only on the first load
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, firstLoad ? 5000 : 0);  // 5s delay for first load, 0ms for subsequent ones
                    } else {
                        entry.target.classList.remove('visible');  // Remove class when out of view
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));

        // Cleanup observer when component unmounts
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [firstLoad]);  // Dependency on firstLoad state to trigger the observer with updated delay

};

export default bouncyButtonTopAnimation;
