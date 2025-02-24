document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none"; // Hide preloader after animation
    }, 6000); // 5s animation + 1s buffer for smooth removal
});
