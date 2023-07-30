const getPosts = async () => {
    let response = await fetch("https://devtoequipo3-default-rtdb.firebaseio.com/POST/.json");
    let data = await response.json();
    return data;
}
const createFirstPostCard = (postObject) => {
    let { author, comentsData, comments, createDate, image, rating, relevant, tags, title} = postObject;
    let {Tag1, Tag2, Tag3} = tags;

    let postMain = document.createElement("main"); 
    postMain.classList.add("col-12", "col-sm-9", "col-md-9", "col-lg-6");
    postMain.setAttribute("id", "postMain");
    console.log(postMain); 

    let filterBox = document.createElement("div");
    filterBox.classList.add("d-flex", "justify-content-star");

    let firstCardPost = document.createElement("div");
    firstCardPost.classList.add("card", "mb-3");

    let relevantText = document.createElement("h5")
    relevantText.classList.add("me-3","topmenu__texts--hover","p-2","rounded");

    let latestText = document.createElement("h5");
    latestText.classList.add("me-3","fw-ligth", "topmenu__texts--hover", "p-2", "rounded");

    let topText = document.createElement("h5");
    topText.classList.add("fw-ligth", "topmenu__texts--hover", "p-2", "rounded");

    let bigImagePost = document.createElement("img")
    bigImagePost.classList.add("card-img-top");
    bigImagePost.setAttribute("src", image);
    bigImagePost.setAttribute("alt", "...")

    let cardBodyPost = document.createElement("div");
    cardBodyPost.classList.add("card-body");
    cardBodyPost.setAttribute("style", "margin-bottom:10px");

    let autorInformation = document.createElement("div");
    autorInformation.classList.add("d-flex","flex-row");

    let titlePost = document.createElement("h5");
    titlePost.classList.add("card-title", "mt-2");

    let tagsT = document.createElement("p");
    tagsT.classList.add("card-text");

    let reactionsandComments = document.createElement("div");
    reactionsandComments.classList.add("d-flex", "flex-row", "justify-content-between");

    let imageAutor = document.createElement("img");
    imageAutor.classList.add("rounded-circle", "icon__image");
    imageAutor.setAttribute("width","40px");
    imageAutor.setAttribute("height","40px");
    imageAutor.setAttribute("src", "https://res.cloudinary.com/practicaldev/image/fetch/s--k7uOWOtg--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/152613/f6aadb36-121c-409f-b746-e40e0408ea51.png");
    imageAutor.setAttribute("alt","icon");

    let autorName = document.createElement("div");
    autorName.classList.add("text", "ms-2");

    let titlePostText = document.createElement("a");
    titlePostText.classList.add("text-decoration-none", "link__text");
    titlePostText.setAttribute("href","./blog.html");
    titlePostText.innerText = title;

    let tagsText1 = document.createElement("span")
    tagsText1.classList.add("hashtags__hover", "p-2", "rounded");
    tagsText1.innerText = Tag1;

    let tagsText2 = document.createElement("span")
    tagsText2.classList.add("hashtags__hover", "p-2", "rounded");
    tagsText2.innerText = Tag2;

    let tagsText3 = document.createElement("span")
    tagsText3.classList.add("hashtags__hover", "p-2", "rounded");
    tagsText3.innerText = Tag3;

    let reactions = document.createElement("div");
    reactions.classList.add("d-flex", "flex-row");

    let timeRead = document.createElement("div")
    timeRead.classList.add("d-flex", "flex-row");

    let autorNameText = document.createElement("h6");
    autorNameText.classList.add("m-0");
    autorNameText.innerText = author;

    let dateText = document.createElement("span");
    dateText.innerText = createDate;

    let heartEmoji = document.createElement("p");
    heartEmoji.innerText = "❤️";
    let unicornEmoji = document.createElement("p");
    unicornEmoji.innerText = "🦄";
    let sorpriseEmoji = document.createElement("p");
    sorpriseEmoji.innerText = "🤯";
    let handsEmoji = document.createElement("p");
    handsEmoji.innerText = "🙌";
    let fireEmoji = document.createElement("p");
    fireEmoji.innerText = "🔥";

    let numberReactionsText = document.createElement("p");
    numberReactionsText.innerText = "212 reactions";

    let commentBoxImage = document.createElement("img");
    commentBoxImage.setAttribute("src","./assets/images/comment-icon.png");
    commentBoxImage.setAttribute("style","width: 15px; height: 15px; margin: 10px; margin-top: 5px;");

    let numberOfComment = document.createElement("p");
    numberOfComment.innerText = comments + "comments";

    let timeReadText = document.createElement("p");
    timeReadText.innerText = "10 min read";

    timeRead.append(timeReadText);

    reactions.append(heartEmoji,
        unicornEmoji,sorpriseEmoji,handsEmoji,
        fireEmoji,numberReactionsText,commentBoxImage,
        numberOfComment,
        );
    reactionsandComments.append(reactions,timeRead);

    tagsT.append(tagsText1,tagsText2,tagsText3);

    titlePost.append(titlePostText);

    autorName.append(autorNameText, dateText);

    autorInformation.append(imageAutor, autorName);

    cardBodyPost.append(
        autorInformation,titlePost,tags,reactionsandComments
        )

    firstCardPost.append(bigImagePost,cardBodyPost);

    ////////////////////////First Post

    filterBox.append(relevantText,latestText,topText);

    postMain.append(filterBox,firstCardPost);

    return postMain;
}

const printAllPost = async() => {
    let posts = await getPosts();
    console.log(posts);

    let postsWrapper = document.getElementById("posts-wrapper");
    let keys = Object.keys(posts);
    console.log(keys);
    keys.forEach(key => {
        console.log("key: ", key)
        console.log("value: ", posts[key])
        let postCard = createFirstPostCard(posts[key]);
        postsWrapper.append(postCard);
    })

}

printAllPost();


