import ListeProduit from './ListeProduit.js';
import fetchRessource from './fetchRessource.js';

  let productData= await fetchRessource('./app/products.json');//ProductData= variable du JSON
  productData=JSON.parse(productData);

  let productsTemplate= await fetchRessource('./template/produit-card.html'); //ProductTemplate= variable du template html des fiches produit

  let productList= new ListeProduit(productData,productsTemplate);//ProductList=Liste des produits filtrés

  //données de parametrage des filtres
  
  let filtre= localStorage.getItem("filtre") ? JSON.parse(localStorage.getItem("filtre")):{
    "price": {
      priceMin:1,
      priceMax:20,
    },
    "note" : {
      noteMin:1,
      noteMax:5,
    },
    "category": {
        "blanc": false,
        "lait": false,
        "noir": false,
        "caramel": false,
        "noix": false,
        "fruit": false,
        "liqueur": false
      },
  }


async function catalogue()
{

  // Récuperation des produits correspondant aux filtres avec la fonction filtreProduct(listeproduit)

  productList.filtreProduct(filtre);

  // Création des fiches produit grace au template et aux données des produits filtrés

  let listProduct=productList.replaceProductTemplate();

  document.getElementById('catalogueProduit').innerHTML=listProduct.join(' ');

  //Parcourir les elements de la page class=card

  let card=document.getElementsByClassName('card');
  console.log(card, 'card');
  

//Addeventlistener au click vers une fonction qui prends en parametre ID card
  for (let c=0;c<card.length;c++){
    card[c].addEventListener('click',()=>
    {
      
      localStorage.setItem('produit', JSON.stringify(productList.produitFromId(card[c].id)));
      window.open('./produit.html','_self');
    }
    )
    
  }

  
}

//Afficher les fiche produit selon les changements des filtres

function filtreChange(){

  //Mise à jour des prices

  filtre.price.priceMin=document.getElementById("priceMin").valueAsNumber;

  filtre.price.priceMax=document.getElementById("priceMax").valueAsNumber;

  //Mise à jour des notes

  filtre.note.noteMin=document.getElementById("noteMin").value;

  filtre.note.noteMax=document.getElementById("noteMax").value;

  //Mise à jour des catégories

  let keysCategories=Object.keys(filtre.category);//nom de categories de filtrages
    
  
    for (let c=0;c<keysCategories.length;c++){

      //Verifier si les categories sont true

      //Si la checkbox est cochée=true Si la checkbox est pas cochée=false =.checked
      //Si la categorie est cochée= true Si la categorie est pas cochée= false =category

      filtre.category[keysCategories[c]]=document.getElementById(keysCategories[c]).checked;
  

    }

    localStorage.setItem('filtre', JSON.stringify(filtre));
    catalogue()
}

//Fonction All

function uncheck(){


let keyCategorie=Object.keys(filtre.category);

  for (let u=0;u<keyCategorie.length;u++){
      
    document.getElementById(keyCategorie[u]).checked = !document.getElementById('all').checked;
    
  }
  filtreChange();
  catalogue();
}
//
//Addeventlistner sur all 
//uncheck les autres 

//Fonction setup

function setup(){

  //Recuperation des input

  let onchangeElem= document.getElementsByTagName('input');
  
  for (let e=0;e<onchangeElem.length;e++){
    onchangeElem[e].addEventListener('change',filtreChange);
  }
  
  //Recuperation des select

  let onchangeSelect= document.getElementsByTagName('select');

  for (let s=0;s<onchangeSelect.length;s++){
    onchangeSelect[s].addEventListener('change',filtreChange);
  }
  document.getElementById('all').addEventListener('change',uncheck);

  
}


setup();
catalogue();

filtreChange();

