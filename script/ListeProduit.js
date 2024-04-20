export default function listeProduit(productsData={},productsTemplate=""){

    this.productsData=productsData;
    this.productsTemplate=productsTemplate;
    this.productsList=[];
    

    //Fonction replace pour creer les produits-cards

    this.replaceProductTemplate= function(){
        let ret=[];
        
        for(let l=0;l<this.productsList.length;l++){
            let keysList= Object.keys(this.productsList[l]);
            let ficheProduit= this.productsTemplate;


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

            if (filtre.prix.prixMax<this.productsData[d].price || filtre.prix.prixMin>this.productsData[d].price )continue;

            if (filtre.note.noteMax<this.productsData[d].note || filtre.note.noteMin>this.productsData[d].note )continue;


            //filtre categories

            let valid=true;
            let keysCategories=Object.keys(filtre.categorie);

            for (let c=0;c<keysCategories.length;c++){

                
                if (!filtre.categorie [keysCategories[c]])continue;

                //Verificaton variable valid=false ou categorie de filtre different de categorie du json
                if (this.productsData[d].category [keysCategories[c]] ){
                    
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
}