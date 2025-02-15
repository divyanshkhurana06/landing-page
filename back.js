document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initial slide display
    showSlide(currentSlide);

    // Automatically change slides every 5 seconds
    setInterval(nextSlide, 5000);
});

function playAudio() {
    const audio = new Audio('audio.mp3'); // Replace 'audio.mp3' with your audio file
    audio.play();
}




        const tvShows = [
            {
                title: "Foundation",
                image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
            },
            {
                title: "The Morning Show",
                image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
            },
            {
                title: "Ted Lasso",
                image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
            },
            {
                title: "Prehistoric Planet",
                image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
            }
        ];

  

    
        let currentShow = 0;
    
        // Render TV Shows
        const tvSlider = document.getElementById('tv-slider');
        const tvDots = document.getElementById('tv-dots');
    
        tvShows.forEach((show, index) => {
            // Add slides
            const slide = document.createElement('div');
            slide.className = 'relative h-full flex-shrink-0';
            slide.style.width = '100%'; // Each slide takes full width
            slide.innerHTML = `
                <img src="${show.image}" alt="${show.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-8">
                    <h3 class="text-4xl font-bold mb-4">${show.title}</h3>
                    <p class="text-xl text-gray-200">Now Streaming</p>
                </div>
            `;
            tvSlider.appendChild(slide);
    
            // Add dots
            const dot = document.createElement('button');
            dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? 'bg-white w-4' : 'bg-white/50'}`;
            dot.addEventListener('click', () => {
                currentShow = index;
                updateSlider();
            });
            tvDots.appendChild(dot);
        });
    
        // Auto-slide functionality
        let slideInterval = setInterval(() => {
            currentShow = (currentShow + 1) % tvShows.length;
            updateSlider();
        }, 1500);
    
        // Update slider position
        function updateSlider() {
            tvSlider.style.transition = 'transform 0.7s ease-in-out'; // Smooth transition
            tvSlider.style.transform = `translateX(-${currentShow * 100}%)`;
    
            // Update dots
            tvDots.querySelectorAll('button').forEach((dot, index) => {
                dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${index === currentShow ? 'bg-white w-4' : 'bg-white/50'}`;
            });
        }
    
        // Pause auto-slide on hover
        tvSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
    
        // Resume auto-slide on mouse leave
        tvSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                currentShow = (currentShow + 1) % tvShows.length;
                updateSlider();
            }, 5000);
        });



        