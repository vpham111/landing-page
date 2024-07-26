document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
  
      fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(result => {
        if (result.status === 'success') {
          formMessage.textContent = 'Message sent successfully!';
          form.reset();
        } else {
          formMessage.textContent = 'Error sending message. Please try again.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        formMessage.textContent = 'An error occurred. Please try again later.';
      });
    });
  });