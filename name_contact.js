document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneGroup = document.getElementById('phoneGroup');
    const emailGroup = document.getElementById('emailGroup');
    
    function checkNames() {
        if (firstNameInput.value.trim() !== '' && lastNameInput.value.trim() !== '') {
            phoneGroup.style.display = 'block';
        } else {
            phoneGroup.style.display = 'none';
            emailGroup.style.display = 'none';
        }
    }
    
    function checkPhone() {
        if (document.getElementById('phone').value.trim() !== '') {
            emailGroup.style.display = 'block';
        } else {
            emailGroup.style.display = 'none';
        }
    }
    
    firstNameInput.addEventListener('input', checkNames);
    lastNameInput.addEventListener('input', checkNames);
    
    if (phoneGroup) {
        document.getElementById('phone').addEventListener('input', checkPhone);
    }
    
    // Form submission
    document.getElementById('userInfoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
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
        scrollableContent.style.maxHeight = `calc(${window.innerHeight * 0.9}px - ${titleHeight}px)`;
    });
});
