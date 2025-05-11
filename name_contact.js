document.addEventListener('DOMContentLoaded', function() {
    // Show all form groups immediately
    const phoneGroup = document.getElementById('phoneGroup');
    const emailGroup = document.getElementById('emailGroup');
    
    if (phoneGroup) phoneGroup.style.display = 'block';
    if (emailGroup) emailGroup.style.display = 'block';

    // Form submission
    document.getElementById('userInfoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phone: document.getElementById('phone')?.value || '',
            email: document.getElementById('email')?.value || '',
            newsletter: document.getElementById('newsletter').checked
        };
        
        console.log('Form submitted:', formData);
        alert('Thank you! Your information has been submitted.');
    });
    
    // Adjust scrollable area height on resize
    window.addEventListener('resize', function() {
        const scrollableContent = document.querySelector('.form-scrollable');
        const titleHeight = document.querySelector('.form-title').offsetHeight;
        if (scrollableContent) {
            scrollableContent.style.maxHeight = `calc(${window.innerHeight * 0.9}px - ${titleHeight}px)`;
        }
    });
});
