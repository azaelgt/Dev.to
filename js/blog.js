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
