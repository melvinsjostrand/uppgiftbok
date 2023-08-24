//let myjson = '("författare": "tim" , "titel" : "dator")';
//let myobejct = JSON.parse(myjson);
let författare;
let titel;

let books = {book: {
    "author": "tim" , "title" : "dator"
}}

function init(){
    books = document.getElementById("books");
    for(element of books.book){
        console.log(Element);
        createTableRow(element);
    }
}
window.onload = init;


function createTableRow(el){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = el.author;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = el.titel;

    tr.appendChild(td);
    books.appendChild(tr);
    console.log(tr);
}

