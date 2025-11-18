let deferredPrompt;
const btn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", e => {
  console.log('beforeinstallprompt (external)');
  e.preventDefault();
  deferredPrompt = e;
  btn.style.display = "block";
});

btn.addEventListener("click", () => {
  console.log('install.js button clicked');
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  deferredPrompt = null;
  btn.style.display = "none";
});
