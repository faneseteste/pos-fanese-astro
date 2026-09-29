const initProfessorsSlider = () => {
  const slider = document.getElementById('professors-slider');
  const btnPrev = document.getElementById('prof-prev');
  const btnNext = document.getElementById('prof-next');

  if (!slider || !btnPrev || !btnNext) {
    return;
  }

  const getScrollAmount = () => {
    const card = slider.querySelector('.professor-card') as HTMLElement | null;

    if (!card) {
      return 300;
    }

    const gap = 20;

    return card.offsetWidth + gap;
  };

  btnPrev.addEventListener('click', () => {
    slider.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth',
    });
  });

  btnNext.addEventListener('click', () => {
    slider.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth',
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProfessorsSlider);
} else {
  initProfessorsSlider();
}