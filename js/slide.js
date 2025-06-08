const slider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.hero-slider img');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const totalSlides = slides.length;
const slideInterval = 4000; // 4 seconds display
const transitionDuration = 400; // 0.3s transition

let autoSlideTimeout;

function goToSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  currentIndex = index;
  slider.style.transition = `transform ${transitionDuration}ms ease`;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  resetAutoSlide();
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

function resetAutoSlide() {
  clearTimeout(autoSlideTimeout);
  autoSlideTimeout = setTimeout(nextSlide, slideInterval);
}

// Arrow events
rightArrow.addEventListener('click', () => {
  nextSlide();
});

leftArrow.addEventListener('click', () => {
  prevSlide();
});

// Start slider
goToSlide(0);













<script>
  document.querySelectorAll('.attraction-card').forEach(card => {
    const track = card.querySelector('.carousel-track');
    const imagesCount = track.children.length;
    let index = 0;
    let intervalId = null;

    function slide() {
      index = (index + 1) % imagesCount;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function startSliding() {
      if (intervalId) return; // prevent duplicates
      intervalId = setInterval(slide, 4000);
    }

    function stopSliding() {
      clearInterval(intervalId);
      intervalId = null;
    }

    card.addEventListener('mouseenter', startSliding);
    card.addEventListener('mouseleave', stopSliding);
  });
</script>


