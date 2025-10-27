
// mobile menu
const burger = document.getElementById('burger');
const mnav = document.getElementById('mnav');
const closeBtn = document.getElementById('mnavClose');

function openMenu(){ mnav.hidden = false; burger.setAttribute('aria-expanded','true'); }
function closeMenu(){ mnav.hidden = true; burger.setAttribute('aria-expanded','false'); }

burger?.addEventListener('click', () => {
  if (mnav.hidden) openMenu(); else closeMenu();
});
document.getElementById('mnavClose')?.addEventListener('click', closeMenu);
mnav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
