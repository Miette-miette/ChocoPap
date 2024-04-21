import PageProduit from "./PageProduit.js";
import fetchRessource from './fetchRessource.js';

let productData=JSON.parse(localStorage.getItem('produit'));

let productTemplate= await fetchRessource('./produitPageTemplate.html');

let pageProduit= new PageProduit(productData,productTemplate);



document.getElementById('ficheProduit').innerHTML=pageProduit.replacePageTemplate();

console.log('page produit',pageProduit);
console.log('productData',productData);
console.log('productTemplate',productTemplate);
