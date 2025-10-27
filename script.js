// burger menu
const burger = document.getElementById('burger');
const offcanvas = document.getElementById('offcanvas');
const closeMenu = document.getElementById('closeMenu');
const backdrop = document.getElementById('backdrop');

function openMenu(){ offcanvas.style.translate = '0 0'; backdrop.style.opacity = 1; backdrop.style.pointerEvents='auto'; }
function close(){ offcanvas.style.translate = '100% 0'; backdrop.style.opacity = 0; backdrop.style.pointerEvents='none'; }

burger?.addEventListener('click', openMenu);
closeMenu?.addEventListener('click', close);
backdrop?.addEventListener('click', close);

// form submit (simple)
const form = document.getElementById('leadForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  if(!document.getElementById('agree').checked){ alert('Нужно согласие на обработку данных'); return; }
  alert('Спасибо! Заявка отправлена.\nИмя: '+data.get('name')+'\nТелефон: '+data.get('phone')+'\nE‑mail: '+data.get('email'));
  form.reset();
});
