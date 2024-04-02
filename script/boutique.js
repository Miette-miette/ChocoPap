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

  if (document.getElementById("ch-all").checked==true && stop ==0)
  {
    
    all(produits.length,produits);
    
    stop =1;
    console.log(stop);
    }
    if (document.getElementById("ch-all").checked === !true)
      {
        while(document.getElementById("catalogueProduit").firstChild)
        {
        document.getElementById("catalogueProduit").removeChild(document.getElementById("catalogueProduit").firstChild)
        }
      } 

//Filtrer par categories de chocolats

filtres(produits);
}



//Creer la fiche produit

function ficheProduit(jsonObj){

  // Création du conteneur
  let produitCard=
    document.createElement("div");
    produitCard.className="card";
    document.getElementById("catalogueProduit").appendChild(produitCard);
    produitCard.style.display="flex";
    console.log(produitCard.style.display);

  //Importer l'image
  let imageProduit=
    document.createElement("img");
    imageProduit.src=jsonObj.image;
    produitCard.appendChild(imageProduit);

  //Importer le titre
  let nomProduit=
    document.createElement("h2"); 
    nomProduit.textContent=jsonObj.title;
    produitCard.appendChild(nomProduit);

  //Importer le prix
  let prixProduit=
    document.createElement("p"); 
    prixProduit.textContent=jsonObj.price;
    produitCard.appendChild(prixProduit);

  //Importer la note
  let noteProduit=
    document.createElement("p"); 
    noteProduit.textContent="Note:" + jsonObj.note;
    produitCard.appendChild(noteProduit);

  //Creer le bouton ajouter au panier
  let ajoutPanier=
    document.createElement("button"); 
    ajoutPanier.textContent="Ajouter au panier" ;
    produitCard.appendChild(ajoutPanier);
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

  //Fonction pour supprimer les fiches produits

function removeFiche(){
  while(document.getElementById("catalogueProduit").firstChild)
    {
      document.getElementById("catalogueProduit").removeChild(document.getElementById("catalogueProduit").firstChild)
    }
}

//Fonction pour afficher les fiches produits
function afficherFiche(){
  for (i=0;i<tableau.length;i++) 
    {
      console.log(gamme[tableau[i]]);
      ficheProduit((gamme)[tableau[i]]);
    }
}


  //Chocolat blanc

  if (document.getElementById("ch-chocolat-blanc").checked==true) //Verifie que la checkbox est active
  {
    for (let i=0;i<idFiltre.length;i++)
    {      
      if (gamme[i].category.blanc === true)// Si la checkbox est true= le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
          console.log(tableau + "blanc");
      }
      if (gamme[i].category.blanc === !true)// Si la checkbox est false= les fiches produits sont supprimées
      {
        removeFiche();
      } 
      afficherFiche();// Création des fiches produits
    }

    // Création des fiches produits
    
  }
  
  //Chocolat lait

  if (document.getElementById("ch-chocolat-lait").checked==true) //Verifie que la checkbox est active
  {
    for (let i=0;i<idFiltre.length;i++)
    {      
      if (gamme[i].category.lait === true)// Si la checkbox est true= le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      console.log(tableau + "lait");
      }
      if (gamme[i].category.lait === !true)// Si la checkbox est false= les fiches produits sont supprimées
      {
        removeFiche();
      } 
      afficherFiche();// Création des fiches produits
    } 
  }
 
  //Chocolat noir

  if (document.getElementById("ch-chocolat-noir").checked==true) //Verifie que la checkbox est active
  {
    for (let i=0;i<idFiltre.length;i++)
    {      
      if (gamme[i].category.noir === true)// Si la checkbox est true= le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      console.log(tableau + "noir");
      }
      if (gamme[i].category.noir === !true)// Si la checkbox est false= les fiches produits sont supprimées
      {
        removeFiche();
      } 
      afficherFiche();// Création des fiches produits
    }
  }
  //Caramel

  if (document.getElementById("ch-caramel").checked==true) //Verifie que la checkbox est active
  {
    for (let i=0;i<idFiltre.length;i++)
    {      
      if (gamme[i].category.caramel === true)// Si la checkbox est true= le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      console.log(tableau + "caramel");
      }
      if (gamme[i].category.caramel === !true)// Si la checkbox est false= les fiches produits sont supprimées
      {
        removeFiche();
      } 
      afficherFiche();// Création des fiches produits
    }
  }

  //Noix

  if (document.getElementById("ch-noix").checked==true) //Verifie que la checkbox est active
  {
    for (let i=0;i<idFiltre.length;i++)
    {      
      if (gamme[i].category.noix === true)// Si la checkbox est true= le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      console.log(tableau + "noix");
      }
      if (gamme[i].category.noix === !true)// Si la checkbox est false= les fiches produits sont supprimées
      {
        removeFiche();
      } 
      afficherFiche();// Création des fiches produits
    }
  }

  //Fruit

  if (document.getElementById("ch-fruit").checked==true) //Verifie que la checkbox est active
  {
    for (let i=0;i<idFiltre.length;i++)
    {      
      if (gamme[i].category.fruit === true)// Si la checkbox est true= le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      console.log(tableau + "fruit");
      }
      if (gamme[i].category.fruit === !true)// Si la checkbox est false= les fiches produits sont supprimées
      {
        removeFiche();
      }
      afficherFiche();// Création des fiches produits 
    }
  }

  //Liqueur

  if (document.getElementById("ch-liqueur").checked==true) //Verifie que la checkbox est active
  {
    for (let i=0;i<idFiltre.length;i++)
    {      
      if (gamme[i].category.liqueur === true)// Si la checkbox est true= le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      console.log(tableau + "liqueur");
      }
      if (gamme[i].category.liqueur === !true)// Si la checkbox est false= les fiches produits sont supprimées
      {
        removeFiche();
      }
      afficherFiche();// Création des fiches produits 
    }
  }

  // All

  /*if (document.getElementById("ch-all").checked==true) //Verifie que la checkbox est active
    {
      if (idFiltre.checked == true)
      {
        idFiltre.checked= false;
      }

      if (gamme[i].category === true)
      {
        all(tableau,gamme);
      
      }
    }
  /*if (document.getElementById("ch-all").checked==!true)// Si la checkbox est false= les fiches produits sont supprimées
      {
        removeFiche();
      }*/
    
  
}




// Code qui ne fonctionne pas & Brouillon

 /*document.getElementsByClassName("card").style.display="none";
while ((k=tableau.shift()!==undefined))
  {
    
    console.log(tableau + "tableau")
    console.log(k +"k")
  }*/  


/*let j=0;
let k;
let categorieChocolat=produits[j]["category"][k];

console.log(produits[0]["category"]["blanc"]);*/

 /*for (let i=0;i<idFiltre.length;i++)
{
  if (gamme[i].category.blanc === !true)
    {
      document.getElementsByClassName("card").style.display='none';
      console.log(document.getElementsByClassName("card").style.display);
    } 
}*/

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

console.log( document.getElementsByClassName("card").display);
*/

 /*if (document.getElementById("ch-all").checked==true) 
  {
    () => {
      if (idFiltre.checked == true){
        idFiltre.checked= false;
      }
    }
  }*/