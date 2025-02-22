// lib/videoBackground.js
export const setupVideoVisibility = (videoIds) => {
    // Create an IntersectionObserver for each video
    const videos = videoIds.map(id => document.getElementById(id));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    // Observe each video
    videos.forEach(video => {
        if (video) {
            observer.observe(video);
        }
    });

    return () => {
        // Disconnect observer on cleanup
        observer.disconnect();
    };
};
