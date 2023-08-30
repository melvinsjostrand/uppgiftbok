//let myjson = '("författare": "tim" , "titel" : "dator")';
//let myobejct = JSON.parse(myjson);
let författare;
let titel;
let error;


let json = []

function init(){
    json = document.getElementById("json");
    error = document.getElementById("error");
    getjson();
}
window.onload = init;


async function getjson(){
    let json = await GetFetch();

    console.log(json);
    for(Element of json)
    {
        console.log(Element);
        createTableRow(Element);
    }
}


function createTableRow(el){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = el.author;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = el.title;

    tr.appendChild(td);
    console.log(tr);
    table.appendChild(tr);
}

async function GetFetch(){

     let path = "https://localhost:7210/Home";
    let response = await fetch(path);

    if(response.status === 200)
    {
      console.log("Det gick att hämta böckerna");
      let json = await response.json();
      return json;
    }
    else
    {
      
      error.innerHTML = "Det gick inte att hämta böckerna";
    }
} 






/*if(response.status === 200)
{
   
    console.log("gick att hämta böckerna");
}
else
{
    console.log("Det gick inte att hämta böckerna")
}*/