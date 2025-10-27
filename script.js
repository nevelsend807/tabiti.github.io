// Drawer menu logic + close on nav click
const drawer = document.getElementById('mainMenu');
const openBtn = document.getElementById('menuToggle');
const closeBtn = document.getElementById('menuClose');
const links = drawer.querySelectorAll('.menu-link');

function openDrawer(){ drawer.classList.add('open'); openBtn.setAttribute('aria-expanded','true'); drawer.setAttribute('aria-hidden','false'); }
function closeDrawer(){ drawer.classList.remove('open'); openBtn.setAttribute('aria-expanded','false'); drawer.setAttribute('aria-hidden','true'); }
openBtn.addEventListener('click', ()=> drawer.classList.contains('open') ? closeDrawer() : openDrawer());
closeBtn.addEventListener('click', closeDrawer);
links.forEach(a => a.addEventListener('click', closeDrawer));

// Quote form (client-side only mock)
const form = document.getElementById('quoteForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const msg = document.getElementById('formMsg');
    const agree = document.getElementById('agree');
    if(!agree.checked){
      msg.textContent = 'Поставьте галочку на согласие с обработкой персональных данных.';
      msg.style.color = '#ff6b6b';
      return;
    }
    msg.textContent = 'Заявка отправлена. Свяжемся с вами в ближайшее время.';
    msg.style.color = '#b3ff00';
    form.reset();
  });
}
