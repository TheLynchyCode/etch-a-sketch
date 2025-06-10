let container;
const sizeBtn = document.querySelector('#sizeBtn');
let num = 16;

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
      divEl.classList.add('nonactive');
    });
    // height of vp
    const height = container.offsetHeight;
    // width of vp
    const width = container.offsetWidth;
    // number multiplied by itself that makes total number of
    // let result = Math.sqrt(n);
    let divHeight = height / n;
    let divWidth = width / n;
    heightPercent = (divHeight / height) * 100;
    widthPercent = (divWidth / width) * 100;
    container.appendChild(divEl);
    // divEl.setAttribute('style', `height: ${heightPercent}%`);
    divEl.setAttribute('style', `width: ${widthPercent}%`);
  }
};

function removeContainer() {
  container.remove();
}

// create 16 x 16 grid upon page loading
// window.addEventListener('DOMContentLoaded', gridLoad(num));
gridLoad(num);

// user select grid size
sizeBtn.addEventListener('click', function () {
  removeContainer();
  const userSelect = prompt('Enter a number to determine grid size');
  gridLoad(userSelect);
});
