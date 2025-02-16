document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusMessage = document.getElementById('statusMessage');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        statusMessage.textContent = 'Please enter a valid email address';
        return;
    }

    // Check for empty fields
    if (!name.trim() || !message.trim()) {
        statusMessage.textContent = 'All fields are required';
        return;
    }

    // Here you can add your form submission logic
    // For example, sending to a server or email service
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    statusMessage.textContent = 'Message sent successfully!';
    
    // Clear form
    this.reset();
});
