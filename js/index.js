function redirectToIndexWithQuery() {
  const queryParams = "param1=value1&param2=value2"; // Agrega aquí los query parameters deseados
  const url = `index.html?${queryParams}`;
  window.open(url, "_self"); // Utiliza "_self" para abrir la URL en la misma ventana
}

// Agrega un evento 'click' al enlace con la imagen


import {getJson} from "./api.js";

const printFirstTagMiniPost = (postObject, firstTag, secondTag, key) => {
  let {title, comments, image, tags} = postObject;

  for(let i=0; i<tags.length; i++) {
  if (tags[i].includes(firstTag)) {

     let tagsContainer = document.getElementById('tags-container');
     let tagContainer = document.createElement('a');
     tagContainer.classList.add('list-group-item');
     tagContainer.addEventListener('click', () => {
      window.open(`../blog.html?postId=${key}`, '_blank');
      })

     let titleContainer = document.createElement('div');
     titleContainer.innerText = title;
     

     let commentContainer = document.createElement('div');
     commentContainer.innerText = comments + ' comments';

     tagContainer.append(titleContainer, commentContainer);
     tagsContainer.append(tagContainer);
     
    }
  if (tags[i].includes(secondTag)) {

        let tagsContainer = document.getElementById('second-tags-container');
        
        let tagContainer = document.createElement('a');
        tagContainer.classList.add('list-group-item');
        tagContainer.addEventListener('click', () => {
          console.log('key desde el listener',key);
          window.open(`../blog.html?postId=${key}`, '_self');
          })
          
        let titleContainer = document.createElement('div');
        titleContainer.innerText = title;
   
        let commentContainer = document.createElement('div');
        commentContainer.innerText = comments + ' comments';
   
        tagContainer.append(titleContainer, commentContainer);
        tagsContainer.append(tagContainer);
        
       }
  }
}
const printRandomPost = (postObject, key) =>
{
  let {title, comments, image} = postObject;
//mini post
let imageMiniPost = document.getElementById('post-aleatory-image');
imageMiniPost.src = image;
imageMiniPost.setAttribute("style"," width: 214px; height: 100px; padding:5px; ");
let titleMiniPost = document.getElementById('title-minipost');
titleMiniPost.innerText = `${title} (${comments})`;

imageMiniPost.addEventListener('click', () => {
  window.open(`../blog.html?postId=${key}`, '_self');
  })
titleMiniPost.addEventListener('click', () => {
  window.open(`../blog.html?postId=${key}`, '_self');
  })
}

const printMiniPost = (postObject, key) =>
{
  let tagsContainer = document.getElementById('random-container');

  console.log('desde la funcion',postObject, key)
  let {title} = postObject;
  let tagContainer = document.createElement('div');
  tagContainer.innerText = title;
    tagContainer.classList.add('list-group-item');
    tagContainer.addEventListener('click', () => {
      window.open(`../blog.html?postId=${key}`, '_self');
      })
    tagsContainer.append(tagContainer);

}


const printPost = async () => {
    let post = await getJson();
    console.log('post', post);
    let keys = Object.keys(post);
    console.log('keys', keys);
    
    let random = Math.floor(Math.random() * (keys.length));
    let keyRandom = keys[random];
    console.log(random, keyRandom, post[keyRandom])
    printRandomPost(post[keyRandom], keyRandom);

    keys.forEach((key) => {
      printFirstTagMiniPost(post[key], '#css', '#devops', key); 

      let randomMini = Math.floor(Math.random() * (keys.length));
      let keyRandomMini = keys[randomMini];
      printMiniPost(post[keyRandomMini], keyRandomMini);
    
    })      
  };
  printPost();
  
  const logoLink = document.querySelector("#logoLink");
  logoLink.addEventListener("click", redirectToIndexWithQuery);