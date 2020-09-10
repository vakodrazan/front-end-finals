const sliderImage = document.querySelectorAll('.sliderImage');
console.log(sliderImage);
const slider = document.querySelector('.slider');

const clickImage = e => {
  if (e.target.matches('img')) {
    const image = event.target;
    image.classList.add('open');
    const cloneImage = image.cloneNode(true); // clone the element
    slider.appendChild(cloneImage); // take the clone version then append it in another element
    cloneImage.classList.remove('remove')

    const removeChild = slider.removeChild(slider.firstElementChild); // remove the element that is already set there before

    console.log("You click this image!", e.target)
  }
  //  else {
  //   sliderImage.classList.add('remove')
  //   sliderImage.classList.remove('open')
  // }
}

sliderImage.forEach(image => image.addEventListener("click", clickImage));
