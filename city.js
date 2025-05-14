document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.getElementById('cityInput');
    const startOverBtn = document.getElementById('startOverBtn');
    const continueBtn = document.getElementById('continueBtn');

    startOverBtn.addEventListener('click', function() {
        cityInput.value = '';
    });

    continueBtn.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city) {
            alert(`You entered: ${city}`);
            // Here you can add what happens when Continue is clicked
        } else {
            alert('Please enter a city');
        }
    });

    // Optional: Allow pressing Enter key to trigger Continue
    cityInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            continueBtn.click();
        }
    });
});