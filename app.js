const container = document.querySelector('div');

for (let i = 1; i <= 256; i++) {
  const divEl = document.createElement('div');
  divEl.textContent = i;
  container.appendChild(divEl);
}
