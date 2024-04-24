import fetchRessource from './fetchRessource.js';
import gestionPanier from './gestionPanier.js';

let productData= await fetchRessource('./app/products.json');//ProductData= variable du JSON
  productData=JSON.parse(productData);

let panierTemplate= await fetchRessource('./template/panierTemplate.js')

let panierItemTemplate=await fetchRessource('./template/itemPanierTemplate.html');

let panier= new gestionPanier(productData,panierItemTemplate);

//Affichage du panier

let conteneurPanier=null

document.getElementById("panier").innerHTML=conteneurPanier.join('');

//AddEventListener sur l'event click avec l'ID card pour identifier le produit ajouté 



//Sauvegarde du panier grace au localstorage




//Remplissage du template panier

let itemPanier=gestionPanier.replacePanierItemTemplate();

document.getElementById("itemPanier").innerHTML=itemPanier.join('');

//Fonction modification du panier

