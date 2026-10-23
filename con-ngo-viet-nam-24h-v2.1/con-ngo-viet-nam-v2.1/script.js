// Con ngõ Việt Nam — 24 giờ | CodePen JS (no dependencies)
(() => {
  const scene = document.querySelector('#village-scene');
  const slider = document.querySelector('#hour-slider');
  const clock = document.querySelector('#clock-output');
  const heading = document.querySelector('#phase-title');
  const description = document.querySelector('#phase-description');
  const presets = [...document.querySelectorAll('.time-presets button')];
  if (!scene || !slider || !clock || !heading || !description) return;

  const periods = [
    { start: 0, end: 4, phase: 'night', title: 'Đêm khuya', description: 'Con ngõ ngủ yên. Trăng, sao và ngọn đèn hiên còn sáng.' },
    { start: 5, end: 6, phase: 'dawn', title: 'Bình minh', description: 'Trời hửng sáng. Chiếc xe máy đầu tiên đi qua ngõ.' },
    { start: 7, end: 10, phase: 'morning', title: 'Buổi sáng', description: 'Xe máy qua ngõ. Nắng sớm chạm ban công, cây xanh lay nhẹ.' },
    { start: 11, end: 14, phase: 'noon', title: 'Buổi trưa', description: 'Nắng đứng bóng. Con ngõ tạm yên, râm mát dưới tán cây.' },
    { start: 15, end: 17, phase: 'afternoon', title: 'Buổi chiều', description: 'Nắng vàng nghiêng qua mái nhà. Xe máy trở về cuối ngày.' },
    { start: 18, end: 21, phase: 'evening', title: 'Buổi tối', description: 'Đèn các tầng bật sáng. Một người thong thả dắt chó đi dạo.' },
    { start: 22, end: 23, phase: 'night', title: 'Đêm khuya', description: 'Phố đã vắng người. Đèn hiên, ánh trăng và đom đóm.' }
  ];

  function setHour(hour) {
    const safeHour = Math.max(0, Math.min(23, Math.round(Number(hour) || 0)));
    const period = periods.find(({ start, end }) => safeHour >= start && safeHour <= end);
    const timeText = `${String(safeHour).padStart(2, '0')}:00`;
    slider.value = String(safeHour);
    slider.setAttribute('aria-valuetext', `${timeText}, ${period.title}`);
    clock.textContent = timeText;
    heading.textContent = period.title;
    description.textContent = period.description;
    scene.dataset.phase = period.phase;
    presets.forEach(button => {
      const isActive = Number(button.dataset.hour) === safeHour;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  slider.addEventListener('input', event => setHour(event.target.value));
  presets.forEach(button => button.addEventListener('click', () => setHour(button.dataset.hour)));
  setHour(slider.value);
})();
