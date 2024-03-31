// Catalogue produits

//Recuperer le JSON et jouer la fonction

let stop =0;

async function catalogue()
{

  //Recupération du JSON
  const requestUrl= './app/products.json';
  const request = new Request(requestUrl);

  const reponse= await fetch(request);
  const produits= await reponse.json();

  console.log(produits);


//Afficher tous les produits au chargement de la page

  /*if (document.getElementById("ch-all").checked==true && stop ==0)
  {

    all(produits.length,produits);
    
    stop =1;
    console.log(stop);
    }
    else{
      console.log("if all");
      filtres();
    }

*/


//Filtrer par categories de chocolat

filtres(produits);

}


//Creer la fiche produit

function ficheProduit(jsonObj){

  //Importer l'image
  let imageProduit=
    document.createElement("img");
    imageProduit.src=jsonObj.image;
    document.getElementById("catalogueProduit").appendChild(imageProduit);

  //Importer le titre
  let nomProduit=
    document.createElement("h2"); 
    nomProduit.textContent=jsonObj.title;
    document.getElementById("catalogueProduit").appendChild(nomProduit);

  //Importer le prix
  let prixProduit=
    document.createElement("p"); 
    prixProduit.textContent=jsonObj.price;
    document.getElementById("catalogueProduit").appendChild(prixProduit);

  //Importer la note
  let noteProduit=
    document.createElement("p"); 
    noteProduit.textContent="Note:" + jsonObj.note;
    document.getElementById("catalogueProduit").appendChild(noteProduit);

}


// Lancement de la fonction catalogue, pour creer la boutique dynamique

catalogue()


// Fonction afficher tous les produits

function all(jsonTaille,gamme){

  console.log(jsonTaille);// Taille du json produits
  console.log(gamme);// Produits concernés


  for (let i=0;i<jsonTaille ;i++)
  {
    
    console.log(jsonTaille);
    console.log(i);

    ficheProduit((gamme)[i]); // Creer les fiches produits des elements concernés

  }
}


// Fonction filtres des types de chocolats


function filtres(gamme)
{ 

let idFiltre = document.querySelectorAll(".zone-filtre>div>input") ; //Recuperation des checkboxs
let j=0;
let tableau = []; //Pour stocker les objets du json concernés

 // console.log(idFiltre);
  //console.log(idFiltre[1]);
  //console.log("fonction filtre");
  //console.log(gamme[1].category[0]);


  if (document.getElementById("ch-liqueur").checked==true) 
  {
    for (let i=0;i<idFiltre.length;i++)
    {      
      if (gamme[i].category.liqueur === true)
      {
        tableau[j] = i ;
        j++

      console.log(tableau);
      //console.log(produits.sousCategorie[j]);
      }
    }
    for (i=0;i<tableau.length;i++) // Création des fiches produits
    {
      console.log(gamme[tableau[i]]);
      ficheProduit((gamme)[tableau[i]])
    }
  }
  }



// Code qui ne fonctionne pas
  
/*let j=0;
let k;
let categorieChocolat=produits[j]["category"][k];

console.log(produits[0]["category"]["blanc"]);*/



/*
let idFiltre = document.getElementById("ch-liqueur");

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
