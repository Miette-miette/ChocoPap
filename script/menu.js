let menuBtn= document.getElementById("btnMenuToggle");
console.log(menuBtn);

let menuCollapse=document.getElementById("menuCollapse");
console.log(menuCollapse);

function showMenu(){

    menuBtn.addEventListener('click', ()=>{

        if(menuCollapse.style.display==="flex"){
            menuCollapse.style.display="none";
            console.log(menuCollapse);
        }
        else{
            menuCollapse.style.display="flex";  
            console.log(menuCollapse);
        }
    })
    
}
