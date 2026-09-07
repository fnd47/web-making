document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector('.footer p');
  const landingScreen = document.getElementById('landingScreen');
  const enterBtn = document.getElementById('enterBtn');

  document.body.classList.remove('loaded');

  if (footerText && !footerText.dataset.year) {
    footerText.textContent = `Progress through technology. © ${year}`;
  }

  const revealContent = () => {
    document.body.classList.add('loaded');
  };

  if (enterBtn) {
    enterBtn.addEventListener('click', revealContent);
  }

  if (landingScreen) {
    landingScreen.addEventListener('click', (event) => {
      if (event.target === landingScreen) {
        revealContent();
      }
    });
  }
});
