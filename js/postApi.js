const getPosts = async () => {
    let response = await fetch("https://devtoequipo3-default-rtdb.firebaseio.com/POST/.json");
    let data = await response.json();
    return data;
}


