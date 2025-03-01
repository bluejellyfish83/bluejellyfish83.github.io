document.addEventListener('DOMContentLoaded', () => {
  const rainContainer = document.querySelector('.rain-container');
  const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' +
    '日本語한글中文こんにちは안녕하세요你好' +
    '\u3040-\u309F' + // Hiragana
    '\u30A0-\u30FF' + // Katakana
    '\u4E00-\u9FFF' + // CJK Unified Ideographs (Common and Old Hanzi)
    '\uAC00-\uD7A3'; // Hangul Syllables

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
      const randomCharCode = chars.charCodeAt(Math.floor(Math.random() * chars.length));
      chain += String.fromCharCode(randomCharCode);
    }
    return chain;
  }

  setInterval(createRainDrop, 100);
});
