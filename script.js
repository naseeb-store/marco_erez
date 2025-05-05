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

document.addEventListener('DOMContentLoaded', function() {
  // Sample project data (8 images total)
  const projects = [
      { id: 1, title: 'Kitchen Remodel', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Bathroom Upgrade', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Bathroom Upgrade', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Home Gym Setup', image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Plumbing Repair', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Deck Building', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Air Purification', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
      { id: 8, title: 'Patio Installation', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
  ];

  const gallery = document.querySelector('.gallery');
  const arrowBtn = document.querySelector('.arrow-btn');

  // Display all projects
  projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="project-image">
          <div class="project-info">
              <h3>${project.title}</h3>
          </div>
      `;
      gallery.appendChild(projectCard);
  });

  // Arrow button click handler
  arrowBtn.addEventListener('click', function() {
      // Calculate scroll amount (width of 4 images + gaps)
      const scrollAmount = gallery.querySelector('.project-card').offsetWidth * 4 + 60;
      
      gallery.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });

  // Hide arrow when scrolled to end
  gallery.addEventListener('scroll', function() {
      if (gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth - 10) {
          arrowBtn.style.display = 'none';
      } else {
          arrowBtn.style.display = 'flex';
      }
  });

  // Initially hide arrow if no scroll needed
  setTimeout(() => {
      if (gallery.scrollWidth <= gallery.offsetWidth) {
          arrowBtn.style.display = 'none';
      }
  }, 100);
});