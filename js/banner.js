const slides = document.querySelectorAll('.ad-group .ad'); // grab all slides from container
let currentSlide = 0; // keep track of current slide
const slideInterval = setInterval(nextSlide, 5000); // show slide every 5 seconds
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

$('.video-section video').on('pause', function() {
  slideInterval = setInterval(nextSlide, 5000);
});

function goToSlide(n) {
  slides[currentSlide].className = 'ad';
  currentSlide = (currentSlide+1) % slides.length;
  slides[currentSlide].className = 'ad active-ad';
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

next.onclick = function() {
  nextSlide();
}
previous.onclick = function() {
  previousSlide();
}
