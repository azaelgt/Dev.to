// vamos a crear los elementos dinamicos del html del post con datos del json
import {getJson} from "./api.js";
import {getPostById} from "./api.js";

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');
console.log('id desde params', postId);

const getPostData = async() => {
  let postData = await getPostById(postId);
  console.log(postData);
  let card = createPostCard(postData);

}
getPostData();
// const getJson = async() => {
//   const response = await fetch("https://devtoequipo3-default-rtdb.firebaseio.com/POST/.json");
//   const data = await response.json();
//   return data;
// };
// dataJson = getJson();

// let imagePost.src = url;

// const mappedResults =
//   Object.keys(dataJson).map(key => {
//     const value = dataJson[key];
//     console.log(value);
//   });


/////////A PARTIR DE AQUI CREAMOS LOS ELEMENTOS DEL DOM///////
//Pasos: 
//1. Crear una funcion 
//2. Crear uno a uno los elementos del dom agregando las clases de una vez, los elementos se desglozaron en papel segun el html 
//3. Empecemos con una prueba, no incluiremos el dom, sera hardkodeado
//4. Hacer apendizaciones
const createPostCard = (postObject) => {
  let {author, comentsData, createdDate, image, tags, title} = postObject;
  let allTags = []
  for(let i=0; i<tags.length; i++) {
    allTags += `${tags[i]} `;
  }
  document.getElementById('post-image').src = image;
  document.getElementById('author-name').innerText = author;
  document.getElementById('date-post').innerText = `Posted on ${createdDate} `;
  document.getElementById('title-post').innerText = title ;
  document.getElementById('hashtag-post').innerText = allTags;
  document.getElementById('bodytext-post').innerText = comentsData;
  /*
  let cardContainer = document.createElement('div');

  let imagePostCard = document.createElement('div'); 

  let imagePost = document.createElement('img');
  imagePost.src = image;
  imagePost.classList.add('img-fluid', 'h-100', 'w-100');

  let imageAuthorPostCard = document.createElement('div');
  imageAuthorPostCard.classList.add('d-flex', 'm-3');

  let imageAuthorPost = document.createElement('div');
  imageAuthorPost.classList.add('position-relative', 'm-1');

  let hiperlinkAuthor = document.createElement('a');
  hiperlinkAuthor.classList.add('position-absolute', 'bottom-0', 'end-0');
  
  let imageAuthor = document.createElement('img');
  imageAuthor.src = urlAuthor;
  imageAuthor.classList.add('img-fluid', 'rounded-circle', 'page-profile__image');

  let authorDataCard = document.createElement('div');
  let authorName = document.createElement('a');
  authorName.innerText = author;
  authorName.classList.add('text-decoration-none', 'user-text__post');

  let datePosted = document.createElement('p');
  datePosted.innerText = 'Posted on ' + createdDate;
  datePosted.classList.add('fw-light', 'post-desc__post');

  let titlePost = document.createElement('h1');
  titlePost.innerText = title;
  titlePost.classList.add('m-2', 'title__post');

  let tagsContainer = document.createElement('div');
  tagsContainer.classList.add('m-2', 'p-1', 'd-flex', 'flex-wrap', 'hashtag__container')
  
  let tagText = document.createElement('a');
  tagText.classList.add('text-decoration-none', 'hashtag__purple--hover')
  tagText.innerText = tags[0];
  // tagText.innerText = tags[1];

  let commentContainer = document.createElement('div');
  commentContainer.innerText = comentsData;
  commentContainer.classList.add('m-3', 'description-post__container');

// //call desde index//
// let tagContainerForListener = document.getElementById('tag-container');

imagePostCard.append(imagePost);
imageAuthorPostCard.append(imageAuthorPost, hiperlinkAuthor, imageAuthor);
authorDataCard.append(authorName, datePosted);
tagsContainer.append(tagText);

cardContainer.append(imagePost, imageAuthorPostCard, authorDataCard, titlePost, tagsContainer, commentContainer);

return cardContainer;
*/
};

const printPost = async () => {
  let post = await getJson();
  console.log('post', post);
  let keys = Object.keys(post);
  console.log('keys', keys);

  let cardWrapper = document.getElementById('card-wrapper');



  // DESDE ESTE FOREACH SE LE MANDA EL VALOR FILTRADO DEL TAG PARA SOLO IMPRIMIR ESE
  keys.forEach((key) => {
    console.log('key', key);
    console.log(post[key]);
    
    // let card = createPostCard(post[key]);
    console.log('card',card);
    cardWrapper.append(card);
  })
};
printPost();
