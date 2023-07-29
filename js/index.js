function redirectToIndexWithQuery() {
  const queryParams = "param1=value1&param2=value2"; // Agrega aquí los query parameters deseados
  const url = `index.html?${queryParams}`;
  window.open(url, "_self"); // Utiliza "_self" para abrir la URL en la misma ventana
}

// Agrega un evento 'click' al enlace con la imagen
const logoLink = document.querySelector("#logoLink");
logoLink.addEventListener("click", redirectToIndexWithQuery);
