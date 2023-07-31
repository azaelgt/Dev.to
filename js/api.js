const getJson = async() => {
    let response = await fetch("https://devtoequipo3-default-rtdb.firebaseio.com/POST.json");
    let data = await response.json();
    return data;
  };
  
  const getPostById = async (id) => {
    let response = await fetch(`https://devtoequipo3-default-rtdb.firebaseio.com/POST/${id}/.json`);
    let data = await response.json();
    console.log('data desde el getPostById', data);
    return data;
  };

export {getJson, getPostById};