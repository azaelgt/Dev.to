import {getJson} from "./api.js";

const printFirstTagMiniPost = (postObject, firstTag, secondTag) =>
{
  let {title, comments,tags} = postObject;
  for(let i=0; i<tags.length; i++) {
  if (tags[i].includes(firstTag)) {

     let tagsContainer = document.getElementById('tags-container');
     let tagContainer = document.createElement('a');
     tagContainer.classList.add('list-group-item');

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

        let card = printFirstTagMiniPost(post[key], '#css', '#devops'); //el post[key] es el argumento q queremos iterar
        console.log('card',card);
        cardWrapper.append(card);
    })      


  };
  printPost();