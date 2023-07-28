// vamos a crear los elementos dinamicos del html del post con datos del json

const saveUser = async (userObject) => {
    let response = await fetch(
      "https://devtoequipo3-default-rtdb.firebaseio.com/POST.json",
      {
        method: "POST",
        body: JSON.stringify(userObject),
      }
    );
    let data = await response.json();
    console.log(data);
    return data;
  };
  
  