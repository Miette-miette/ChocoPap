import fetchRessource from './fetchRessource.js';
import gestionPanier from './GestionPanier.js';
import ListeProduit from './ListeProduit.js';

let productData= await fetchRessource('./app/products.json');//ProductData= variable du JSON
  productData=JSON.parse(productData);

let productList= new ListeProduit(productData,'');//ProductList=Liste des produits filtrés

let panierItemTemplate=await fetchRessource('./template/itemPanierTemplate.html');

let panier= new gestionPanier(productData,panierItemTemplate);


//AddEventListener sur le panier

let btnPanier= document.getElementById("panierBtn");

btnPanier.addEventListener('click',()=>{

  let panier = document.getElementById("panier");
    
  panier.classList.toggle("panierFerme");
  }
)

//Ajout panier sur page produit


let ajoutPanierProduit=document.getElementById("ajoutPanier") ? document.getElementById("ajoutPanier") : document.getElementsByClassName("ajoutPanier"); 

ajoutPanierProduit.addEventListener('click',()=>{

  //Récuperation des data de l'item 

  panier.panierData();

  //prix total
    
  panier.prixTotal();
  
 //Affichage de l'item dans le panier

 panier.replacePanierItemTemplate();

})

let viderPanier=document.getElementById("resetBtn")/*||document.getElementsByClassName("ajoutPanier");*/

viderPanier.addEventListener('click',()=>{

  console.log(viderPanier,'vider panier');

  localStorage.setItem('produitPanier',[]);
  document.getElementById("prixTotal").innerHTML=0;
  

 //Affichage de l'item dans le panier

})

//Remplissage du template panier

let itemAjoutPanier=panier.replacePanierItemTemplate();

//Fonction modification du panier

panier.prixTotal();
//AddEventListener sur l'event click avec l'ID card pour identifier le produit ajouté 

/*let ajoutPanierCard=document.getElementsByClassName("ajoutPanier");
console.log(ajoutPanierCard + 'ajout panier');

for (let p=0; p<ajoutPanierCard.length;p++){

  console.log(ajoutPanierCard.length, "btn panier tableau");

  ajoutPanierCard[p].addEventListener('click',()=>{

    localStorage.setItem('produitPanier', JSON.stringify(productList.produitFromId(ajoutPanierCard[p].id)));
  }
)
}*/