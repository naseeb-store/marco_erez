document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('help-description');
    const charCount = document.querySelector('.char-count');
    const wrapper = document.querySelector('.textarea-wrapper');
    
    if (textarea && charCount && wrapper) {
        // Initialize character count
        updateCharCount();
        
        // Update count on input
        textarea.addEventListener('input', updateCharCount);
        
        // Sync textarea height with wrapper
        textarea.addEventListener('input', syncHeight);
        
        function updateCharCount() {
            const currentLength = textarea.value.length;
            charCount.textContent = `${currentLength}/2000`;
            charCount.style.color = currentLength > 2000 ? 'red' : '#999';
        }
        
        function syncHeight() {
            wrapper.style.height = 'auto';
            wrapper.style.height = textarea.scrollHeight + 'px';
        }
        
        // Initial sync
        syncHeight();
    }
});