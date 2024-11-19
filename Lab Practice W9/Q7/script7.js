document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slider-images img");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");
    const imageCounter = document.getElementById("image-counter");

    let currentIndex = 0;
    const totalImages = images.length;

    // Function to update the slider display
    function updateSlider() {
        images.forEach((img, index) => {
            img.classList.remove("active");
            if (index === currentIndex) {
                img.classList.add("active");
            }
        });

        // Update the image counter display
        imageCounter.textContent = `Image ${currentIndex + 1} of ${totalImages}`;
    }

    // Event listeners for next and previous buttons
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalImages; // Cycle forward
        updateSlider();
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Cycle backward
        updateSlider();
    });

    // Auto-cycle images every 3 seconds
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider();
    }, 3000);

    // Initialize the slider
    updateSlider();
});
