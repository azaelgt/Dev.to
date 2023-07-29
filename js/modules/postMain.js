const createFirstPostCard = (postObject) => {
    let { Image, Comment, Tag1, Tag2, Tag3, Title, ImageAutor, Autor, Date, key } = postObject;

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
    bigImagePost.setAttribute("src", Image);
    bigImagePost.setAttribute("alt", "...")

    let cardBodyPost = document.createElement("div");
    cardBodyPost.classList.add("card-body");
    cardBodyPost.setAttribute("style", "margin-bottom:10px");

    let autorInformation = document.createElement("div");
    autorInformation.classList.add("d-flex","flex-row");

    let titlePost = document.createElement("h5");
    titlePost.classList.add("card-title", "mt-2");

    let tags = document.createElement("p");
    tags.classList.add("card-text");

    let reactionsandComments = document.createElement("div");
    reactionsandComments.classList.add("d-flex", "flex-row", "justify-content-between");

    let imageAutor = documetn.createElement("img");
    imageAutor.classList.add("rounded-circle", "icon__image");
    imageAutor.setAttribute("width","40px");
    imageAutor.setAttribute("height","40px");
    imageAutor.setAttribute("src", ImageAutor);
    imageAutor.setAttribute("alt","icon");

    let autorName = document.createElement("div");
    autorName.classList.add("text", "ms-2");

    let titlePostText = document.createElement("a");
    titlePostText.classList.add("text-decoration-none", "link__text");
    titlePostText.setAttribute("href","./blog.html");
    titlePostText.innerText = Title;

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

    let firstNameText = document.createElement("h6");
    firstNameText.classList.add("m-0");
    firstNameText.innerText = Autor;

    let dateText = document.createElement("span");
    dateText.innerText = Date;

    let heartEmoji = document.createElement("p");
    heartEmoji.innerText = "❤️";
    let unicornEmoji = documen.createElement("p");
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

    let numberOfComment = documen.createElement("p");
    numberOfComment.innerText = "52 comments";

    let timeReadText = document.createElement("p");
    timeReadText.innerText = "10 min read";

}


