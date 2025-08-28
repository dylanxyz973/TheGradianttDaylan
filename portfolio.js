function filterWorks(category, clickedButton) {
  const wrappers = document.querySelectorAll('.gradient-border'); // target wrapper, not box

  wrappers.forEach(wrapper => {
    const box = wrapper.querySelector('.portfolio-box'); // find inner box
    if (category === 'all' || box.dataset.category === category) {
      wrapper.style.display = ''; // keep original CSS layout
    } else {
      wrapper.style.display = 'none'; // hide whole wrapper
    }
  });
  
  // Highlight active button
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

// Keep your existing toggle description code
document.querySelectorAll('.portfolio-box').forEach(box => {
  box.addEventListener('click', function (event) {
    event.stopPropagation();
    document.querySelectorAll('.portfolio-box .description')
      .forEach(desc => desc.classList.add('hidden'));

    const desc = this.querySelector('.description');
    desc.classList.toggle('hidden');
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

