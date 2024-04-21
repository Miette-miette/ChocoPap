export default function pageProduit(productData={},productPageTemplate=""){

    this.productData=productData;
    this.productPageTemplate=productPageTemplate;
   
    

    //Récuperation de l'event click sur le produit séléctionné, local storage


    // Fonction création de la page produit personnalisée

    this.replacePageTemplate=function(){

        let keysListPage= Object.keys(this.productData);// Les clés du JSON sans leurs valeurs
        let productPage= this.productPageTemplate;// Template de la page produit
            

        for(let k=0; k<keysListPage.length; k++){
                
            while(productPage.includes(`%${keysListPage[k]}%`)){
                productPage=productPage.replace(`%${keysListPage[k]}%`,this.productData[keysListPage[k]]);
            }
        }
        return productPage;
    }
}

