export default function gestionPanier(productData={},panierTemplate=""){

    this.productData=productData;
    this.panierTemplate=panierTemplate;
    this.panierItemTemplate=panierItemTemplate;

    //Affichage du panier+ addition des items

    this.prixTotal=function(){

        let prices=this.productData.price;
        let panierT=this.panierTemplate;

        

    }



    //Affichage des produits dans le panier

    this.replacePanierItemTemplate=function(){

        let keysListPanier= Object.keys(this.productData);// Les clés du JSON sans leurs valeurs
        let panierItem= this.panierItemTemplate;// Template de la page produit
            

        for(let k=0; k<keysListPanier.length; k++){
                
            while(panierItem.includes(`%${keysListPanier[k]}%`)){
                panierItem=panierItem.replace(`%${keysListPanier[k]}%`,this.panierItemTemplate[keysListPanier[k]]);
            }
        }
        return panierItem;
    }
}