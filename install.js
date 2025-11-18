/* Centralized PWA install helpers */
let deferredPrompt;
const btn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", e => {
  console.log('beforeinstallprompt (external)');
  e.preventDefault();
  deferredPrompt = e;
  if (btn) btn.style.display = "block";
});

// Debug helper and manifest/service worker checks
function checkPWAEligibility(){
  const status = document.getElementById('pwaStatus');
  if (!status) return;

  navigator.serviceWorker.getRegistration().then(reg => {
    if (!reg) {
      status.textContent = 'PWA: Service worker yoxdur — konsolu yoxlayın.';
      console.warn('No service worker registered');
      return;
    }

    fetch('manifest.webmanifest', {cache: 'no-store'})
      .then(res => { if (!res.ok) throw new Error('manifest 404'); return res.json(); })
      .then(man => { status.textContent = 'PWA: Uyğunluq yoxlanıldı — yükləyin düyməsi görünməlidir.'; })
      .catch(err => { console.error('Manifest problem', err); status.textContent = 'PWA: manifest.webmanifest tapılmadı və ya səhvdir.'; });
  });
}

function showInstallButtonForDebug(){
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get('debugInstall') === '1'){
      console.log('Debug: forcing install button visible via URL flag');
      if (btn) btn.style.display = 'block';
      const s = document.getElementById('pwaStatus');
      if (s) s.textContent = 'PWA: Debug — install button forced visible';
    }
  } catch(e){ console.warn('debugInstall parse error', e); }
}

window.addEventListener('load', () => { checkPWAEligibility(); showInstallButtonForDebug(); });

btn && btn.addEventListener("click", () => {
  console.log('install button clicked');
  if (!deferredPrompt) {
    console.warn('No deferredPrompt available');
    const status = document.getElementById('pwaStatus');
    if (status) {
      status.textContent = 'PWA: Brauzer install prompt hələ gəlməyib. Mobil Chrome istifadə edirsinizsə menyudan "Add to Home screen" seçin.';
      setTimeout(()=> { status.textContent = ''; }, 6000);
    }
    return;
  }

  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choice => console.log('User response to install prompt:', choice))
    .catch(err => console.error('Error showing install prompt:', err));
  // keep button visible — change label after install via appinstalled
  deferredPrompt = null;
});

window.addEventListener('appinstalled', () => {
  console.log('PWA installed');
  const status = document.getElementById('pwaStatus');
  if (status) status.textContent = 'PWA: Quraşdırıldı — alqış! 🎉';
});
