// Catalogue produits

//Recuperer le JSON et jouer la fonction
async function catalogue(){

  const requestUrl= './app/products.json';
  const request = new Request(requestUrl);

  const reponse= await fetch(request);
  const produits= await reponse.json();

  /*const catalogueProduits= JSON.stringify(produits);
  console.log(catalogueProduits)*/

  ficheProduit(produits);

  console.log((produits));
  console.log((produits)[1]);

ficheProduit((produits)[2])
  
}



function ficheProduit(jsonObj){

  let myH2=
    document.createElement("h2"); 
    myH2.textContent=jsonObj.title;
    document.getElementById("catalogueProduit").appendChild(myH2)


}


catalogue()




/*let request = new XMLHttpRequest();
request.open('GET', requestUrl, true);
request.responseType = 'json';
request.send();

console.log(request + 'request');



request.onload= function(){
  let produits= request.response;
  ficheProduit(produits);
  
}

let products=JSON.parse(request)*/
