
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (links) links.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.faq-item').classList.toggle('open');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',()=>{
    if(links) links.classList.remove('open');
  });
});





const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const submitButton = document.getElementById('submit-button');

if (contactForm && formStatus && submitButton) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    formStatus.className = 'form-status';
    formStatus.textContent = '';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) throw new Error('Submission failed');

      contactForm.reset();
      formStatus.className = 'form-status success';
      formStatus.textContent = 'Thank you. We received your request and our team will contact you within one business day.';
      submitButton.textContent = 'Request Sent';
    } catch (error) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'We could not submit your request. Please try again or contact our team directly.';
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      return;
    }

    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }, 5000);
  });
}
