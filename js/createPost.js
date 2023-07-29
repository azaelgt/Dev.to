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

    const urlPostImg = document.querySelector("#url_post_img").value;
    const postTitle = document.querySelector("#input_post_title").value;
    const postBody = quill.root.innerHTML;
    const postTimeToRead = Math.ceil(quill.getText().length / 1500);

    const postAuthor = "Azael Abdias"; // Replace with the actual author's name or ID
    const postComments = []; // Initialize comments as an empty array
    const postRating = Math.random();
    const postRelevant = true; // Set relevant to true (you can change this based on your requirement)

    const userComment = quill.root.innerHTML;
    postComments.push(userComment);

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} - ${
      currentDate.getMonth() + 1
    } - ${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;