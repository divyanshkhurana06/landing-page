document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    
    function nextSlide() {
        index = (index + 1) % slides.length;
        document.querySelector(".slider").style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000);
});
