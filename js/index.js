import {getJson} from "./api.js";

const printPostDetail = (postObject) =>
{
  let {author, comentsData, createdDate, image, tags, title, key} = postObject;
  document.getElementById('post-image').src = image;
  document.getElementById('author-image').src = urlAuthor;
  document.getElementById('author-name').innerText = author;
  document.getElementById('date-post').innerText = createdDate;
  document.getElementById('title-post').innerText = title ;
  document.getElementById('hashtag-post').innerText = tags;
  document.getElementById('bodytext-post').innerText = comentsData;
  // document.getElementById('').innerText = ;
  // document.getElementById('').innerText = ;
  // document.getElementById('').innerText = ;


}
printPostDetail();