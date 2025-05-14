document.addEventListener('DOMContentLoaded', function() {
  // Select all form boxes and their checkboxes
  const formBoxes = document.querySelectorAll('.form-box');
  const checkboxes = document.querySelectorAll('.checkbox');

  // Initially uncheck ALL checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.classList.remove('checked');
  });

  // Set up single-selection functionality
  formBoxes.forEach(box => {
    box.addEventListener('click', function() {
      // First uncheck ALL checkboxes
      checkboxes.forEach(cb => {
        cb.classList.remove('checked');
      });
      
      // Then check only the clicked checkbox
      const clickedCheckbox = this.querySelector('.checkbox');
      clickedCheckbox.classList.add('checked');
    });
  });
});