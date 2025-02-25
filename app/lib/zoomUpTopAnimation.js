import { useState, useEffect } from 'react';

const useZoomUpTopAnimation = () => {
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        const elements = document.querySelectorAll('.zoom-up-top');

        // Set a timeout of 5 seconds to remove the first load delay
        if (firstLoad) {
            setTimeout(() => {
                setFirstLoad(false); // Set firstLoad to false after 5 seconds
            }, 5000); // 5 seconds delay before continuing with the observer logic
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Apply the animation with a 5-second delay on first load
                    setTimeout(() => {
                        entry.target.classList.add('animate-zoom-up-top');
                    }, firstLoad ? 5000 : 0); // 5s delay for the first load, 0ms after that
                } else {
                    entry.target.classList.remove('animate-zoom-up-top');
                }
            });
        }, {
            threshold: 0.7, // Trigger the animation when 70% of the element is visible
        });

        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.disconnect());
        };
    }, [firstLoad]); // Dependency on firstLoad to trigger the delay

};

export default useZoomUpTopAnimation;