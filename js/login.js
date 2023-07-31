const openInNewTab = (url) => {
    window.open(url, "_blank");
  }

const btnLogin = document.getElementById('continue');
const btnForgot = document.getElementById('forgot');

btnLogin.addEventListener("click", () => {
    openInNewTab("http://127.0.0.1:5501/index.html");
  });

btnForgot.addEventListener("click", () => {
    openInNewTab("http://127.0.0.1:5501/login.html");
  });

