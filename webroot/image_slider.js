const sliderImage = document.querySelectorAll('.sliderImage');
console.log(sliderImage);
const slider = document.querySelector('.slider');

const clickImage = e => {
  
  console.log(e.target);
}

sliderImage.forEach(img => img.addEventListener("click", clickImage));
