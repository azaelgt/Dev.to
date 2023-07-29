// vamos a crear los elementos dinamicos del html del post con datos del json

const getJson = async() => {
  const response = await fetch("https://devtoequipo3-default-rtdb.firebaseio.com/POST.json");
  const data = await response.json();
  return data;
};
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
  imageAuthor.src = "https://randomuser.me/api/portraits/women/31.jpg";
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


imagePostCard.append(imagePost);
imageAuthorPostCard.append(imageAuthorPost, hiperlinkAuthor, imageAuthor);
authorDataCard.append(authorName, datePosted);

cardContainer.append(imagePost, imageAuthorPostCard, authorDataCard, titlePost);

return cardContainer;
};

const printPost = async () => {
  let post = await getJson();
  console.log(post);
  let keys = Object.keys(post);
  console.log(keys);

  let cardWrapper = document.getElementById('card-wrapper');

  keys.forEach((key) => {
    console.log('key', key);
    console.log(post[key]);
    let card = createPostCard(post[key]);
    console.log('card',card);
    cardWrapper.append(card);
  })
};
printPost();