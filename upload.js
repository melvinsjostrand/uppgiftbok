
let form;

  function init(){
    form = document.querySelector("form");
    
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


    Json={
        "author":author,
        "title":title
    }

    console.log(Json);
    let status = await postFetch(Json);

    console.log(status)
  }

  async function postFetch(json){
    let path = "URL till server";
    const response = await fetch(path , {
    method:"POST",
    mode:"cors",
    Headers:{
    },
    body:JSON.stringify(json)
 
  })
  return response.status;
}