const container = document.querySelector('div');

for (let i = 0; i < 16; i++) {
  const divEl = document.createElement('div');
  divEl.textContent = i;
  container.appendChild(divEl);
}
