// Con ngõ Việt Nam — 24 giờ | CodePen JS (no dependencies)
(() => {
  const scene = document.querySelector('#village-scene');
  const timeInput = document.querySelector('#time-input');
  const heading = document.querySelector('#phase-title');
  const description = document.querySelector('#phase-description');
  if (!scene || !timeInput || !heading || !description) return;

  const periods = [
    { start: 0, end: 4, phase: 'night', title: 'Đêm khuya', description: 'Con ngõ ngủ yên. Trăng, sao và ngọn đèn hiên còn sáng.' },
    { start: 5, end: 6, phase: 'dawn', title: 'Bình minh', description: 'Trời hửng sáng. Chiếc xe máy đầu tiên đi qua lòng đường.' },
    { start: 7, end: 10, phase: 'morning', title: 'Buổi sáng', description: 'Xe máy qua ngõ dưới lòng đường. Nắng sớm chạm ban công, cây xanh lay nhẹ.' },
    { start: 11, end: 14, phase: 'noon', title: 'Buổi trưa', description: 'Nắng đứng bóng. Con ngõ tạm yên, râm mát dưới tán cây.' },
    { start: 15, end: 17, phase: 'afternoon', title: 'Buổi chiều', description: 'Nắng vàng nghiêng qua mái nhà. Xe máy trở về cuối ngày.' },
    { start: 18, end: 21, phase: 'evening', title: 'Buổi tối', description: 'Đèn các tầng bật sáng. Một người dắt chó đi dạo đúng chiều trong ngõ.' },
    { start: 22, end: 23, phase: 'night', title: 'Đêm khuya', description: 'Phố đã vắng người. Đèn hiên, ánh trăng và đom đóm.' }
  ];

  function getHour(value) {
    const [hour] = String(value || '08:00').split(':');
    const parsed = Number(hour);
    return Number.isFinite(parsed) ? Math.max(0, Math.min(23, parsed)) : 8;
  }

  function setHour(value) {
    const safeHour = getHour(value);
    const period = periods.find(({ start, end }) => safeHour >= start && safeHour <= end) || periods[2];
    const timeText = `${String(safeHour).padStart(2, '0')}:00`;
    timeInput.value = timeText;
    heading.textContent = period.title;
    description.textContent = period.description;
    scene.dataset.phase = period.phase;
  }

  timeInput.addEventListener('input', event => setHour(event.target.value));
  timeInput.addEventListener('change', event => setHour(event.target.value));
  setHour(timeInput.value);
})();
