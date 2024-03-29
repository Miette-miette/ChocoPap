

// Catalogue produits



let request = new XMLHttpRequest();
request.open('GET', "./app/products.json", true);
request.responseType = 'json';
request.send();

console.log(request + 'request');



request.onload= function(){
  let produits= request.response;
  ficheProduit(produits);
  
}

let products=JSON.parse(request)


function ficheProduit(jsonObj){

  let myH2=
    document.createElement("h2"); 
    myH2.textContent=jsonObj["title"];
    document.getElementById("catalogueProduit").appendChild(myH2)


}
request.responseType="json"

console.log(products[1]);



