// VARIABLES
let container;
const sizeBtn = document.querySelector('#sizeBtn');
let num = 16;

// FUNCTIONS D
// random RGB colour creation
function getRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b}`;
}

// grid creation
const gridLoad = function (n) {
  container = document.createElement('div');
  document.body.appendChild(container);
  container.classList.add('container');
  const powerOf = Math.pow(n, 2);
  for (let i = 1; i <= powerOf; i++) {
    const divEl = document.createElement('div');
    // divEl.textContent = i;
    divEl.classList.add('active');
    divEl.addEventListener('mouseenter', function () {
      // divEl.classList.add('nonactive');
      divEl.style.backgroundColor = getRandomRGB();
    });

    const height = container.offsetHeight;
    const width = container.offsetWidth;
    let divHeight = height / n;
    let divWidth = width / n;
    heightPercent = (divHeight / height) * 100;
    widthPercent = (divWidth / width) * 100;

    container.appendChild(divEl);
    divEl.setAttribute('style', `width: ${widthPercent}%`);
  }
};

// removes html container element
function removeContainer() {
  container.remove();
}

gridLoad(num);

// user select grid size
sizeBtn.addEventListener('click', function () {
  removeContainer();
  let userSelect = prompt('Enter a number to determine grid size');
  if (`${userSelect}` >= 100) {
    alert(`Must enter in a number greater than 0 and less than 100`);
    userSelect = prompt('Enter grid size');
  }
  gridLoad(userSelect);
});
