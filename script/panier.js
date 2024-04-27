import fetchRessource from './fetchRessource.js';
import gestionPanier from './gestionPanier.js';
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

//AddEventListener sur l'event click avec l'ID card pour identifier le produit ajouté 

/*let ajoutPanier=document.getElementsByClassName("btnPanier");
console.log(ajoutPanier + 'ajout panier');*/

/*for (let p=0; p<ajoutPanier.length;p++){
  ajoutPanier[p].addEventListener('click',()=>{
  localStorage.setItem('produitPanier', JSON.stringify(productList.produitFromId(ajoutPanier[p].id)));
  }
)
}*/

//Ajout panier sur page produit


let ajoutPanierProduit=document.getElementById("ajoutPanier");

ajoutPanierProduit.addEventListener('click',()=>{

  let produitStorage=localStorage.getItem("produit");
  let qteProduit=document.getElementById("qte").value;
  let produitsTab= localStorage.getItem("produitPanier") ? JSON.parse(localStorage.getItem("produitPanier")) :[];


  //Boucle for pour verifier les id des items dans le panier

  for(let i=0;i<produitsTab.length;i++){
    //Ajustement des quantité si item deja existant
    if(produitsTab[i].id==JSON.parse(produitStorage).id){

      produitsTab[i].qte =parseInt(produitsTab[i].qte)+parseInt(qteProduit) ;
      localStorage.setItem("produitPanier", JSON.stringify(produitsTab));

      return 0;
    }
  }
  //Remplissage du tableau si nouveau item
  
  let itemPanier={id:JSON.parse(produitStorage).id, qte:qteProduit}
  let itemAjoutPanier=gestionPanier.replacePanierItemTemplate();

  produitsTab.push(itemPanier);

  localStorage.setItem("produitPanier", JSON.stringify(produitsTab));
  
  localStorage.getItem('produitPanier', JSON.stringify(productData.produitFromId(itemPanier).id));

  document.getElementById("itemPanier").innerHTML=itemAjoutPanier.join('');

})


//Remplissage du template panier


//Fonction modification du panier