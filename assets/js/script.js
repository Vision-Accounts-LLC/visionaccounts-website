
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('open'));

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

document.querySelectorAll('.has-dropdown .nav-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      const item = trigger.closest('.has-dropdown');
      item.classList.toggle('open');
    }
  });
});

if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', links && links.classList.contains('open') ? 'true' : 'false');
  });
}
