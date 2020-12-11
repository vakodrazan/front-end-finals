const sliderImage = document.querySelectorAll('.sliderImage');
console.log(sliderImage);
const slider = document.querySelector('.slider');

const clickImage = e => {
  if (e.target.matches('img') === true) {
    const image = e.target;
    const cloneImage = image.cloneNode(true); // clone the element
    cloneImage.classList.add('imageViewing')
    slider.appendChild(cloneImage); // take the clone version then append it in another element
    const removeChild = slider.removeChild(slider.firstElementChild); // remove the element that is already there before
  }

}

sliderImage.forEach(image => image.addEventListener("click", clickImage));
