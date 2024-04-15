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

//Filtrer par categories de chocolats

filtres(produits.length,produits);

// Recuperer les données pour la page produit 

recupererDataLien(produits);

}



//Creer la fiche produit

function ficheProduit(jsonObj){

  // Création du conteneur
  let produitCard=
    document.createElement("div");
    produitCard.className="card";
    document.getElementById("catalogueProduit").appendChild(produitCard);
    produitCard.style.display="flex";


  // Création du lien vers la page produit
  let lienProduit=
    document.createElement("a");
    /*lienProduit.href="produit.html?"/*+ data */;
    produitCard.appendChild(lienProduit);
    

  //Importer l'image
  let imageProduit=
    document.createElement("img");
    imageProduit.src=jsonObj.image;
    lienProduit.appendChild(imageProduit);

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
    ajoutPanier.className="btnPanier"
    ajoutPanier.textContent="Ajouter au panier" ;
    produitCard.appendChild(ajoutPanier);

 
}

// Lancement de la fonction catalogue, pour creer la boutique dynamique

catalogue()


// Fonction afficher tous les produits

function all(jsonTaille,gamme){

  //console.log(jsonTaille);// Taille du json produits
  //console.log(gamme);// Produits concernés


  for (let i=0;i<jsonTaille ;i++)
  {
    
    ficheProduit((gamme)[i]); // Creer les fiches produits des elements concernés
  }
}

//Fonction pour decocher les checkboxs

function uncheck(input){
  for (let i=1; i<input.length;i++)
      {
        if (input[i].checked== true)
        {
          input[i].checked== false;
          console.log(input[i] +"input");
          i++
        }
       
      }
}

// Fonction filtres des types de chocolats

function filtres(jsonTaille, gamme)
{ 

let idFiltre = document.querySelectorAll(".zone-filtre>div>input") ; //Recuperation des checkboxs
let j=0;
let tableau = []; //Pour stocker les objets du json concernés



   console.log("taille: "+idFiltre.length);


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
      //console.log(gamme[tableau[i]]);
      ficheProduit((gamme)[tableau[i]]);
    }
}

//Fonction pour supprimer les doublons

function deleteDoublon(){
  for (i=0;i<tableau.length;i++)
  {
    for (j=i+1;j<tableau.length;j++)
    {
      if (tableau[i]==tableau[j])
      {
        console.log(tableau[i] +"tableau i");
        console.log(tableau[j] +"tableau j");
        tableau.splice(j,1);
      }
    }

  }
  console.log("tableau final : "+tableau);

}

  // All

  if (document.getElementById("ch-all").checked==true) //Verifie que la checkbox est active
  {
      all(jsonTaille,gamme) 
      uncheck(idFiltre);
      deleteDoublon(); 
      
  }
  if (document.getElementById("ch-all").checked === !true)
      {
        removeFiche()
      }


  //Chocolat blanc

  if (document.getElementById("ch-chocolat-blanc").checked==true && document.getElementById("ch-all").checked==false) //Verifie que la checkbox est active
  {

    for (let i=0;i<jsonTaille;i++)
    {   
      if (gamme[i].category.blanc === true)// le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
          //console.log(tableau + "blanc");
      }
      if (gamme[i].category.blanc === !true)// les fiches produits sont supprimées
      {
        removeFiche();
      } 
      deleteDoublon(); 
      console.log(tableau +"tableau blanc");
      afficherFiche();// Création des fiches produits
    }
    
  }
  
  //Chocolat lait

  if (document.getElementById("ch-chocolat-lait").checked==true && document.getElementById("ch-all").checked==false) //Verifie que la checkbox est active
  {
    for (let i=0;i<jsonTaille;i++)
    {      
      if (gamme[i].category.lait === true)// le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          
          j++
      
      //console.log(tableau + "lait");
      }
      if (gamme[i].category.lait === !true)// les fiches produits sont supprimées
      {
        removeFiche();
      }
      deleteDoublon(); 
      console.log(tableau +"tableau lait");
      afficherFiche();// Création des fiches produits
      
    } 
  }
 
  //Chocolat noir

  if (document.getElementById("ch-chocolat-noir").checked==true && document.getElementById("ch-all").checked==false) //Verifie que la checkbox est active
  {
    for (let i=0;i<jsonTaille;i++)
    {      
      if (gamme[i].category.noir === true)// le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      //console.log(tableau + "noir");
      }
      if (gamme[i].category.noir === !true)// les fiches produits sont supprimées
      {
        removeFiche();
      } 
      deleteDoublon(); 
      afficherFiche();// Création des fiches produits
    }
  }

  //Caramel

  if (document.getElementById("ch-caramel").checked==true && document.getElementById("ch-all").checked==false) //Verifie que la checkbox est active
  {
    for (let i=0;i<jsonTaille;i++)
    {      
      if (gamme[i].category.caramel === true)// le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      //console.log(tableau + "caramel");
      }
      if (gamme[i].category.caramel === !true)// les fiches produits sont supprimées
      {
        removeFiche();
      } 
      deleteDoublon(); 
      afficherFiche();// Création des fiches produits
    }
  }

  //Noix

  if (document.getElementById("ch-noix").checked==true && document.getElementById("ch-all").checked==false) //Verifie que la checkbox est active
  {
    for (let i=0;i<jsonTaille;i++)
    {      
      if (gamme[i].category.noix === true)// le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      //console.log(tableau + "noix");
      }
      if (gamme[i].category.noix === !true)// les fiches produits sont supprimées
      {
        removeFiche();
      } 
      deleteDoublon(); 
      afficherFiche();// Création des fiches produits
    }
  }

  //Fruit

  if (document.getElementById("ch-fruit").checked==true && document.getElementById("ch-all").checked==false) //Verifie que la checkbox est active
  {
    for (let i=0;i<jsonTaille;i++)
    {      
      if (gamme[i].category.fruit === true)//le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      //console.log(tableau + "fruit");
      }
      if (gamme[i].category.fruit === !true)// les fiches produits sont supprimées
      {
        removeFiche();
      }
      deleteDoublon(); 
      afficherFiche();// Création des fiches produits 
    }
  }

  //Liqueur

  if (document.getElementById("ch-liqueur").checked==true && document.getElementById("ch-all").checked==false) //Verifie que la checkbox est active
  {
    for (let i=0;i<jsonTaille;i++)
    {      
      if (gamme[i].category.liqueur === true)// le tableau recupère les IDs 
      { 
          tableau[j] = i ;
          j++
      
      //console.log(tableau + "liqueur");
      }
      if (gamme[i].category.liqueur === !true)//  les fiches produits sont supprimées
      {
        removeFiche();
      }
      deleteDoublon(); 
      afficherFiche();// Création des fiches produits 
    }
  }
  
}



// Transferer des données pour la page produit

function recupererDataLien(json){
 let voirPlus= document.querySelectorAll('#catalogueProduit a');
  console.log("recuprerdatalien");

  for(let i=0;i<voirPlus.length;i++){
    let lien=voirPlus[i];

    console.log(voirPlus + "lien");
    
    lien.addEventListener('click',dataLien(json),false)
    
    }
  
    
  }

function dataLien(event,json){
      let lienActif=event.target;
      //console.log(lienActif);

      let idPageProd= new URLSearchParams(window.location.search);

      /*for (let i=0;i<json.length;i++){
        let urlPageProd= idPageProd.get(lienActif);
      }*/
      
      //faire un if pour chercher un match entre image et id
    }




// Code qui ne fonctionne pas & Brouillon

//Afficher tous les produits au chargement de la page

  /*if (document.getElementById("ch-all").checked==true && stop ==0)
  {
    
    all(produits.length,produits);
    
    stop =1;
    console.log(stop + "stop");
    }
    if (document.getElementById("ch-all").checked === !true)
      {
        while(document.getElementById("catalogueProduit").firstChild)
        {
        document.getElementById("catalogueProduit").removeChild(document.getElementById("catalogueProduit").firstChild)
        }
      }*/
