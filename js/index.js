function redirectToIndexWithQuery() {
  const queryParams = "param1=value1&param2=value2"; // Agrega aquí los query parameters deseados
  const url = `index.html?${queryParams}`;
  window.open(url, "_self"); // Utiliza "_self" para abrir la URL en la misma ventana
}

// Agrega un evento 'click' al enlace con la imagen
const logoLink = document.querySelector("#logoLink");
logoLink.addEventListener("click", redirectToIndexWithQuery);
import {getJson} from "./api.js";

const printFirstTagMiniPost = (postObject, firstTag, secondTag, key) =>
{
  let {title, comments,tags} = postObject;
  for(let i=0; i<tags.length; i++) {
  if (tags[i].includes(firstTag)) {

     let tagsContainer = document.getElementById('tags-container');

     let tagContainer = document.createElement('a');
     tagContainer.classList.add('list-group-item');
     tagContainer.addEventListener('click', () => {
      console.log('key desde el listener',key);
      window.open(`../Dev.to/blog.html?postId=${key}`, '_blank');
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
          window.open(`../Dev.to/blog.html?postId=${key}`, '_blank');
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

const printPost = async () => {
    let post = await getJson();
    console.log('post', post);
    let keys = Object.keys(post);
    console.log('keys', keys);
  
    let cardWrapper = document.getElementById('tags-container'); 
  
  
    keys.forEach((key) => {
        console.log('key', key);
        console.log('post',post[key]);

        let card = printFirstTagMiniPost(post[key], '#css', '#devops', key); //el post[key] es el argumento q queremos iterar
        console.log('card',card);
        cardWrapper.append(card);
    })      


  };
  printPost();


