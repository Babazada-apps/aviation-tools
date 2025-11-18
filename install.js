let deferredPrompt;
const btn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  btn.style.display = "block";
});

btn.addEventListener("click", () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  deferredPrompt = null;
  btn.style.display = "none";
});
