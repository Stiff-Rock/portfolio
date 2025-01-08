function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.startsWith('es')) {
    document.getElementById("greeting").textContent = "¡Hola Mundo!";
  } else {
    document.getElementById("greeting").textContent = "Hello World!";
  }
}

window.onload = detectLanguage;
