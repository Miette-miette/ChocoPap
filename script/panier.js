async function catalogue()
{

  //Recupération du JSON
  const requestUrl= './app/products.json';
  const request = new Request(requestUrl);

  const reponse= await fetch(request);
  const produits= await reponse.json();

  console.log(produits);

  ajoutPanier(produits);
}

function ajoutPanier(json){
    let btnAjout=document.getElementsByClassName('btnPanier');
    for(let i=0;i<btnAjout.length;i++){
        let btn=btnAjout[i];
    
        console.log(btn + "btn");
        
        btnActif.addEventListener('click',btnClick(json),false);
}
}

function btnClick(event){
    let btnActif=event.target;
    console.log(btnActif);
}