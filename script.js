document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdown = item.querySelector('.dropdown-menu');
        
        if (dropdown) {
          // Close all other dropdowns first
          document.querySelectorAll('.dropdown-menu.active').forEach(openDropdown => {
            if (openDropdown !== dropdown) {
              openDropdown.classList.remove('active');
              openDropdown.closest('.nav-item').querySelector('.nav-link').classList.remove('active');
            }
          });
          
          // Toggle current dropdown
          dropdown.classList.toggle('active');
          link.classList.toggle('active');
        }
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.dropdown-menu.active').forEach(dropdown => {
          dropdown.classList.remove('active');
          dropdown.closest('.nav-item').querySelector('.nav-link').classList.remove('active');
        });
      }
    });
  });


   // Add active class when icon is clicked
document.addEventListener('DOMContentLoaded', function() {
  const iconItems = document.querySelectorAll('.icon-item');
  
  iconItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Remove active class from all items
      iconItems.forEach(i => i.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');
      
      // You can add additional click handling here
    });
  });
});