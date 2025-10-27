// Mobile menu toggle + close on link click
const menu = document.getElementById('mobileMenu');
const burger = document.getElementById('hamburger');
const menuClose = document.getElementById('menuClose');

function openMenu() {
  menu.classList.add('open');
  menu.setAttribute('aria-hidden','false');
  burger.setAttribute('aria-expanded','true');
}
function closeMenu() {
  menu.classList.remove('open');
  menu.setAttribute('aria-hidden','true');
  burger.setAttribute('aria-expanded','false');
}
burger?.addEventListener('click', () => {
  if(menu.classList.contains('open')) closeMenu(); else openMenu();
});
menuClose?.addEventListener('click', closeMenu);
menu?.querySelectorAll('[data-close]').forEach(a => a.addEventListener('click', closeMenu));

// Clickable house cards -> open PDF
document.querySelectorAll('.house.clickable').forEach(card => {
  card.addEventListener('click', () => {
    const pdf = card.getAttribute('data-pdf');
    if (pdf) window.open(pdf, '_blank');
  });
});

// Simple fake form handler
document.getElementById('leadForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = 'Заявка отправлена. Свяжемся с вами в ближайшее время.';
  e.target.reset();
  document.getElementById('agree').checked = false;
});
