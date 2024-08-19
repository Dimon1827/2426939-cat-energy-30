const exampleButton = document.querySelector('.example__button');
const sliderAfter = document.querySelector('.slider__image-wrapper--after');
const sliderBefore = document.querySelector('.slider__image-wrapper--before');

let dragging = false;
let startX = 0;
let xValue = 0;

exampleButton.addEventListener('mousedown', (e) => {
  dragging = true;

  const style = window.getComputedStyle(exampleButton);
  const translateX = parseInt(style.getPropertyValue('--x'));
  startX = e.pageX - translateX;
});

document.body.addEventListener('mouseup', () => {
  dragging = false;
});

document.body.addEventListener('mousemove', (e) => {
  if (!dragging) return
  const style = window.getComputedStyle(exampleButton);
  const translateX = parseInt(style.getPropertyValue('--x'));
  const isXIncreasing = xValue < e.pageX;
  const isXDecreasing = xValue > e.pageX;
  xValue = e.pageX;
  if (translateX <= 0 || translateX > 600) {
    dragging = false;
  }
  if (translateX <= 0 && isXIncreasing || translateX > 600 && isXDecreasing) {
    dragging = true;
  }
  exampleButton.style.setProperty('--x', `${e.pageX - startX}px`);
  sliderBefore.style.setProperty('width', `${e.pageX - startX + 15}px`);
  sliderAfter.style.setProperty('--x', `${e.pageX - startX + 15}px`);


});
