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

    const postCreatedDate = `${formattedDate} ${formattedTime}`;

    function getRandomTags(tagsList, minTags, maxTags) {
      const numTags =
        Math.floor(Math.random() * (maxTags - minTags + 1)) + minTags;
      const shuffledTags = tagsList.sort(() => 0.5 - Math.random());
      return shuffledTags.slice(0, numTags);
    }

    // List of available tags
    const tagsList = [
      "#beginners",
      "#devops",
      "#typescript",
      "#css",
      "#database",
      "#security",
      "#blockchain",
      "#machinelearning",
      "#git",
      "#gamedev",
      "#vscode",
      "#computerscience",
      "#javascript",
    ];
    const randomTags = getRandomTags(tagsList, 1, 4);
    