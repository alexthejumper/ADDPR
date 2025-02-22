// lib/videoBackground.js
export const setupVideoVisibilityInCarousel = (carouselClass) => {
    const videos = Array.from(document.querySelectorAll(`${carouselClass} video`));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(video => {
        if (video) {
            observer.observe(video);
        }
    });

    return () => {
        observer.disconnect();
    };
};
