const container = document.querySelector('.container');
const sizeBtn = document.querySelector('#sizeBtn');

// create 16 x 16 grid upon page loading
window.addEventListener('DOMContentLoaded', function () {
  for (let i = 1; i <= 256; i++) {
    const divEl = document.createElement('div');
    divEl.textContent = i;
    divEl.classList.add('active');
    divEl.addEventListener('mouseenter', function () {
      divEl.classList.add('nonactive');
    });
    container.appendChild(divEl);
  }
});

// user select grid size
sizeBtn.addEventListener('click', function () {
  prompt('Enter a number to determine grid size');
});
