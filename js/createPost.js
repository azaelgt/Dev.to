document.addEventListener("DOMContentLoaded", () => {
  const quill = new Quill("#editor", {
    theme: "snow",
    placeholder: "Escribe el contenido de tu publicación aquí...\n",
  });

  const URL = "https://devtoequipo3-default-rtdb.firebaseio.com/POST/.json";
  const publishBtn = document.querySelector("#save_btn");
  console.log(publishBtn);
  publishBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    console.log("button clicked");
