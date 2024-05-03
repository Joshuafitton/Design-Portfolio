class Slideshow {
  constructor(slideshowContainer) {
      this.slideshowContainer = slideshowContainer;
      this.slideIndex = 1;
      this.slides = slideshowContainer.getElementsByClassName("slide");
      this.dots = slideshowContainer.getElementsByClassName("dot");
      this.showSlides(this.slideIndex);
  }

  changeSlide(n) {
      this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
      this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
      if (n > this.slides.length) {
          this.slideIndex = 1;
      }
      if (n < 1) {
          this.slideIndex = this.slides.length;
      }
      for (let i = 0; i < this.slides.length; i++) {
          this.slides[i].style.display = "none";
      }
      for (let i = 0; i < this.dots.length; i++) {
          this.dots[i].className = this.dots[i].className.replace(" active", "");
      }
      this.slides[this.slideIndex - 1].style.display = "block";
      this.dots[this.slideIndex - 1].className += " active";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const slideshows = document.getElementsByClassName("slideshow-container");
  for (let i = 0; i < slideshows.length; i++) {
      const slideshow = new Slideshow(slideshows[i]);
      slideshows[i].querySelector(".prev").addEventListener("click", () => slideshow.changeSlide(-1));
      slideshows[i].querySelector(".next").addEventListener("click", () => slideshow.changeSlide(1));
      const dots = slideshows[i].querySelectorAll(".dot");
      for (let j = 0; j < dots.length; j++) {
          dots[j].addEventListener("click", () => slideshow.currentSlide(j + 1));
      }
  }
});

