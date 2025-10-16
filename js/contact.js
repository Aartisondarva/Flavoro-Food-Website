// contact.js — EmailJS integration (front-end)
document.addEventListener('DOMContentLoaded', function () {
  // initialize EmailJS - replace 'YOUR_PUBLIC_KEY' with the public key from EmailJS
  emailjs.init('YOUR_PUBLIC_KEY');

  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Optional: small front-end validation
    const name = form.from_name.value.trim();
    const email = form.reply_to.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill all fields.');
      return;
    }

    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS values
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
      project_name: 'Flavoro Contact'
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then(function (response) {
        alert('Message sent! Thank you — we will contact you soon.');
        form.reset();
      }, function (error) {
        console.error('FAILED...', error);
        alert('There was an error sending your message. Please try again later.');
      });
  });
});
