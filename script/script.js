// Catalogue produits

//Recuperer le JSON et jouer la fonction

let stop =0;

async function catalogue(){

  const requestUrl= './app/products.json';
  const request = new Request(requestUrl);

  const reponse= await fetch(request);
  const produits= await reponse.json();
 
  console.log(produits.length);

  //Fonctions filtre

  if (document.getElementById("ch-all").checked==true && stop ==0){

    all(produits.length,produits);
    console.log("if all");
    stop =1;
  
  }
}


//Creer la fiche produit

function ficheProduit(jsonObj){

  let imageProduit=
    document.createElement("img");
    imageProduit.src=jsonObj.image;
    document.getElementById("catalogueProduit").appendChild(imageProduit);

  let nomProduit=
    document.createElement("h2"); 
    nomProduit.textContent=jsonObj.title;
    document.getElementById("catalogueProduit").appendChild(nomProduit);

  let prixProduit=
    document.createElement("p"); 
    prixProduit.textContent=jsonObj.price;
    document.getElementById("catalogueProduit").appendChild(prixProduit);

  let noteProduit=
    document.createElement("p"); 
    noteProduit.textContent="Note:" + jsonObj.note;
    document.getElementById("catalogueProduit").appendChild(noteProduit);

}

catalogue()



// Afficher tous les produits

function all(jsonTaille,gamme){

  console.log(jsonTaille);

  for (let i=0;i<jsonTaille ;i++)
  {
    
    console.log(jsonTaille);
    console.log(i);
    ficheProduit((gamme)[i]);
  //catalogue((produits)[i+1]); 

  }
}


// Filtres checked if else



/*
const requestUrl= './app/products.json';

let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

console.log(request + 'request');

let products=JSON.parse(request)

/*request.onload= function(){
  let produits= request.response;
  ficheProduit(produits);
  
}

*/
