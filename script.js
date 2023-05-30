//your JS code here. If required.
document.addEventListener('DOMContentLoaded', generateBoxes);

function generateBoxes() {
  const container = document.querySelector('.container');

  for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }

  addHoverListeners();
}

function addHoverListeners() {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('mouseover', handleMouseOver);
  });
}

function handleMouseOver(event) {
  const square = event.target;

  // Change background color to random color
  square.style.backgroundColor = getRandomColor();

  // Smoothly transition back to original color after 1 second
  setTimeout(() => {
    square.style.backgroundColor = 'lightgray';
  }, 1000);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}