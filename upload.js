
let form;
let error;

  function init(){
    form = document.querySelector("form");
    error = document.getElementById("error");
    form.addEventListener("submit" , event=>{
        getFromData();
        

        event.preventDefault();
    })
  }
  window.onload = init;


  async function getFromData(){
   

    let author = form.elements.författare.value;
    let title = form.elements.titel.value


    console.log(author);
    console.log(title);


    json={

        "title":title,
        "author":author
  
    }

    console.log(json);
    let status = await postFetch(json);

    console.log(status)
  }

  async function postFetch(json){
  
    let path = "https://localhost:7210/Home";
    const response = await fetch(path,{
    method:"POST",
    mode:"cors",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(json)
 
  })
  if(response.status === 201)
  {
    location.href = "index.html";
  }
  else
  {
    
    error.innerHTML = "   det gick inte att ladda upp";
  }
}