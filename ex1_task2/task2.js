// Create a function called renderImage() that set the innerHTML of imageContainer to an
// HTML img with src is the variable images

function renderImage() {
  imageContainer.innerHTML = `<img src="${images[index]}" alt="Slider Image">`;
}
