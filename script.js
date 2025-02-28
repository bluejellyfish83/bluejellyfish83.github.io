document.addEventListener('DOMContentLoaded', () => {
  const rainContainer = document.querySelector('.rain-container');
  const chars = '01';
  
  function createRainDrop() {
    const rainDrop = document.createElement('div');
    rainDrop.classList.add('rain-drop');
    rainDrop.style.left = `${Math.random() * 100}vw`;
    rainDrop.style.animationDuration = `${Math.random() * 2 + 2}s`;
    rainDrop.style.opacity = Math.random();
    rainDrop.textContent = chars[Math.floor(Math.random() * chars.length)];
    rainContainer.appendChild(rainDrop);

    setTimeout(() => {
      rainDrop.remove();
    }, 4000);
  }

  setInterval(createRainDrop, 100);
});
