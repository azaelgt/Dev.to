const createPostCard = (postObject) => {
    let { Image, Comment, Tags, Title, key } = postObject;

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

}
