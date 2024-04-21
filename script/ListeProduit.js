export default function listeProduit(productsData={},productsTemplate=""){

    this.productsData=productsData;
    this.productsTemplate=productsTemplate;
    this.productsList=[];
    

    //Fonction replace pour creer les produits-cards

    this.replaceProductTemplate= function(){
        let ret=[];
        
        for(let l=0;l<this.productsList.length;l++){
            let keysList= Object.keys(this.productsList[l]);// Les clés du JSON sans leurs valeurs
            let ficheProduit= this.productsTemplate;// Template de la fiche produit


            for(let k=0; k<keysList.length; k++){
                
                while(ficheProduit.includes(`%${keysList[k]}%`)){
                    ficheProduit=ficheProduit.replace(`%${keysList[k]}%`,this.productsList[l][keysList[k]]);
                }
            }
            ret.push(ficheProduit);
        }
        return ret;

    }
    //fonction filtre 
    
    this.filtreProduct= function(filtre){
        
        this.productsList=[]; 
        

        for (let d=0;d<this.productsData.length;d++){
 
            //Début des filtres

            if (filtre.price.priceMax<this.productsData[d].price || filtre.price.priceMin>this.productsData[d].price )continue;

            if (filtre.note.noteMax<this.productsData[d].note || filtre.note.noteMin>this.productsData[d].note )continue;


            //filtre categories

            let valid=true;
            let keysCategories=Object.keys(filtre.category);
            

            for (let c=0;c<keysCategories.length;c++){

                
                if (!filtre.category[keysCategories[c]])continue;

                //Verificaton variable valid=false ou categorie de filtre different de categorie du json
                if (!this.productsData[d].category[keysCategories[c]] ){
                    
                    valid=false;//
                    break;
                }   
            }
             if(!valid)continue;

            //Le produit passe les filtres et est ajouté

            this.productsList.push(this.productsData[d]);

        }
        
        return this.productsList;
    }

      //fonction qui a partir de ID card retrouve le JSON produit et le return

      this.produitFromId= function(id){

        for (let i=0;i<this.productsData.length;i++){
            if(id==this.productsData[i].id){
                return this.productsData[i];
            }
        }



        
      }
    
}

