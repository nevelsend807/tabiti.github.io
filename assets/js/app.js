
// Drawer
const drawer = document.getElementById('drawer');
const openBtn = document.getElementById('menuToggle');
const closeBtn = document.getElementById('menuClose');
const links = document.querySelectorAll('.navlink');

function openDrawer(){ drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false'); }
function closeDrawer(){ drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true'); }

openBtn?.addEventListener('click', openDrawer);
closeBtn?.addEventListener('click', closeDrawer);
links.forEach(a => a.addEventListener('click', closeDrawer));

// Form
const form = document.getElementById('leadForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const ok = form.reportValidity();
  if(!ok) return;
  document.getElementById('formMsg').classList.remove('hidden');
  form.reset();
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      const el = document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
    }
  });
});
