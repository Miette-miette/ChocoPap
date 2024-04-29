let nomFiltre= document.getElementsByClassName("nomFiltre");
console.log(nomFiltre);

let zoneFiltre=document.getElementsByClassName("zone-filtre");
console.log(zoneFiltre);

function showFiltre(){

for(let f=0;f<nomFiltre.length;f++){
    nomFiltre[f].addEventListener('click', ()=>{
        console.log(nomFiltre[f]);

           if(zoneFiltre[f].style.display==="flex"){
                zoneFiltre[f].style.display="none";
                console.log(zoneFiltre);
            }
            else{
                zoneFiltre[f].style.display="flex";  
                console.log(zoneFiltre);
            } 
        })

        
    }
    
}