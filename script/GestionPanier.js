export default function gestionPanier(productData={},panierItemTemplate=""){

    this.productData=productData;
    this.panierItemTemplate=panierItemTemplate;

    
    
    
    
    
    // addition des items





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