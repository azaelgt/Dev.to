import {getJson} from "./api.js";

const printPostDetail = (postObject, post, key) =>
{
  let {title, comments,tags} = postObject;
  for(let i=0; i<tags.length; i++) {
  if (tags[i].includes('#beginners')) {
     document.getElementById('title-post').innerText = title; 
     document.getElementById('comments-post').innerText = comments;
     console.log('key desde el for`',key, 'post desde el for', post)
    }
  }
}

const printPost = async () => {
    let post = await getJson();
    console.log('post', post);
    let keys = Object.keys(post);
    console.log('keys', keys);
  
    let cardWrapper = document.getElementById('tag-container');
  
  
    keys.forEach((key) => {
        console.log('key', key);
        console.log('post',post[key]);

        let card = printPostDetail(post[key], post, key); //el post[key] es el argumento q queremos iterar
        console.log('card',card);
        cardWrapper.append(card);
    })      


  };
  printPost();