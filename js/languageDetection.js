function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;

  if (userLang.startsWith('es')) {
    document.getElementById("greeting").textContent = "Ups... Llegaste demasiado pronto";
  } else {
    document.getElementById("greeting").textContent = "Whoops... You came too early";
  }
}

window.onload = detectLanguage;
