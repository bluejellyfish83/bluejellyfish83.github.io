document.addEventListener('DOMContentLoaded', () => {
  const rainContainer = document.querySelector('.rain-container');
  const chars = '01';
  
  function createRainDrop() {
    const rainDrop = document.createElement('div');
    rainDrop.classList.add('rain-drop');
    rainDrop.style.left = `${Math.random() * 100}vw`;
    rainDrop.style.animationDuration = `${Math.random() * 2 + 2}s`;
    rainDrop.style.opacity = Math.random();
    rainDrop.textContent = generateRandomChain();
    rainContainer.appendChild(rainDrop);

    setTimeout(() => {
      rainDrop.remove();
    }, 4000);
  }

  function generateRandomChain() {
    const length = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 15
    let chain = '';
    for (let i = 0; i < length; i++) {
      chain += chars[Math.floor(Math.random() * chars.length)];
    }
    return chain;
  }

  setInterval(createRainDrop, 100);
});
