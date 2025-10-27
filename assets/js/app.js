// Close menu on nav click
document.querySelectorAll('nav.menu a[href^="#"]').forEach(a=>{
  a.addEventListener('click', ()=>{
    const cb = document.getElementById('nav-toggle');
    if(cb) cb.checked = false;
  });
});

// Form mock
const f = document.getElementById('leadForm');
if(f){
  f.addEventListener('submit', (e)=>{
    e.preventDefault();
    const agree = f.querySelector('input[type="checkbox"]');
    const out = document.getElementById('formMsg');
    if(!agree.checked){ out.textContent = 'Нужно согласие на обработку персональных данных.'; return; }
    out.textContent = 'Спасибо! Заявка отправлена.';
    f.reset();
  });
}
