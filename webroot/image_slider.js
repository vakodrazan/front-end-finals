const imageCollection = document.querySelectorAll('.sliderImage');
const sliderImage = document.querySelectorAll('.sliderImage');

const activeImage = document.querySelector('.image-active');
const firstImage = document.querySelector('.open');
const allImages = Array.from(document.querySelectorAll('.section_image-slider__gallery__image'));

// Handling the slider
const imageSlider = (e) => {
  const clickedImage = e.target;
   activeImage.src = clickedImage.src
   sliderImage.forEach(image => image.style.opacity = 0.5);
   firstImage.classList.remove('open');
   clickedImage.style.opacity = 1;
}

// Event listner for images by looping through them
imageCollection.forEach(image => image.addEventListener(('click'), imageSlider));