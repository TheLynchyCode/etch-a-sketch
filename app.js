const container = document.querySelector('div');

for (let i = 1; i <= 256; i++) {
  const divEl = document.createElement('div');
  divEl.textContent = i;
  container.appendChild(divEl);
}

// NodeList of divs
const childDivs = document.querySelectorAll('.container > div');
// Conversion of NodeList to an Array
const childDivsArray = Array.from(childDivs);

// Iterating through div array, adding an event listener to each div, changing background color on mouseover event
for (let i of childDivsArray) {
  i.addEventListener('mouseover', function () {
    i.setAttribute('style', 'background-color: #333');
  });
}
