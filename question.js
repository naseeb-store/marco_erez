document.addEventListener('DOMContentLoaded', function() {
  // Check all checkboxes by default
  document.querySelectorAll('.checkbox').forEach(checkbox => {
    checkbox.classList.add('checked');
  });
  
  // Add click to toggle functionality
  document.querySelectorAll('.form-box').forEach(box => {
    box.addEventListener('click', function() {
      this.querySelector('.checkbox').classList.toggle('checked');
    });
  });
});