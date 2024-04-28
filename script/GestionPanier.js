import ListeProduit from './ListeProduit.js';
export default function gestionPanier(productData={},panierItemTemplate=""){

    this.productData=productData;
    this.panierItemTemplate=panierItemTemplate;
    
    let productList= new ListeProduit(productData,'');

    //Boucle for pour verifier les id des items dans le panier

    this.panierData=function(){

        let produitStorage=localStorage.getItem("produit");
        let qteProduit=document.getElementById("qte").value;
        let produitsTab= localStorage.getItem("produitPanier") ? JSON.parse(localStorage.getItem("produitPanier")) :[];

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

        produitsTab.push(itemPanier);

        localStorage.setItem("produitPanier", JSON.stringify(produitsTab));
    }

    //Prix total

    this.prixTotal=function(){

        let showProduitPanier=localStorage.getItem('produitPanier') ? JSON.parse(localStorage.getItem('produitPanier')) :[];
        let prixReplace=document.getElementById("prixTotal");
        let itemPrice=0;

        for(let s=0;s<showProduitPanier.length;s++){
            let itemId=showProduitPanier[s].id;
            let itemJsonData=productList.produitFromId(itemId);
            itemPrice += itemJsonData.price*showProduitPanier[s].qte;
          }
        prixReplace.innerHTML=parseInt(itemPrice*100)/100;
    }



    //Affichage des produits dans le panier

    this.replacePanierItemTemplate=function(){

        let showProduitPanier=localStorage.getItem('produitPanier') ? JSON.parse(localStorage.getItem('produitPanier')) :[];
        
        let keysListPanier= Object.keys(showProduitPanier);// Les clés du JSON sans leurs valeurs
        
        let panierItem= this.panierItemTemplate;// Template de la page produit
            

        for(let k=0; k<keysListPanier.length; k++){
                
            let item=productList.produitFromId(showProduitPanier[k].id);
            console.log(item);

            while(panierItem.includes(`%${keysListPanier[k]}%`)){
                panierItem=panierItem.replace(`%${keysListPanier[k]}%`,item[keysListPanier[k]]);
                console.log(panierItem);
            }
        }
        return panierItem;
    }
}