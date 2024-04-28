import PageProduit from "./PageProduit.js";
import fetchRessource from './fetchRessource.js';

let productData=JSON.parse(localStorage.getItem('produit'));

let productTemplate= await fetchRessource('./template/produitPageTemplate.html');

let pageProduit= new PageProduit(productData,productTemplate);



document.getElementById('ficheProduit').innerHTML=pageProduit.replacePageTemplate();

console.log('productData',productData);
