function filterWorks(category, clickedButton) {
  const boxes = document.querySelectorAll('.portfolio-box');

  boxes.forEach(box => {
    if (category === 'all' || box.dataset.category === category) {
      box.style.display = '';
    } else {
      box.style.display = 'none';
    }
  });
  
  // Highlight active button
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.portfolio-box').forEach(box => {
    box.addEventListener('click', () => {
      const url = box.dataset.link;
      if (url) {
        window.location.href = url;
      }
    });
  });
});

// Keep your existing close-on-click-outside code
document.addEventListener('click', function () {
  document.querySelectorAll('.portfolio-box .description')
    .forEach(desc => desc.classList.add('hidden'));
});

// Keep your initial load behaviour
window.onload = () => {
  const allButton = document.querySelector('.filter-buttons button'); // first button is "All"
  filterWorks('all', allButton);
};


