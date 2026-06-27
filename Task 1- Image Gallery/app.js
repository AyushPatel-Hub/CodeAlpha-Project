let inp=document.querySelector("input");


const API_KEY="cbH5kR52lGDIW8sRcp7t5UJi4cYhCIJQ8QOLQ3y_v7w";
let url = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=1&query=`;
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let div=document.querySelector(".random");

btn1.addEventListener("click", ()=>{
    getImages();
})


async function getImages(){
    try{
         
        input=inp.value;
        let res= await fetch(url+input);
        let response= await res.json();
        let div=document.querySelector(".random");
        for(let i=0;i<response.length;i++){
            console.log(response[i].urls.small);
            document.createElement("img");
            let newimg=document.createElement("img");
            newimg.src=response[i].urls.small;
            div.appendChild(newimg);
            // img.src=response[i].urls.small;
            // document.appendChild(".random");
            inp.value="";

        }
       

        
        
        
    }
    catch(error){
        console.log(error);
    }
}

btn2.addEventListener("click",()=>{
    if (div) {
        div.innerHTML = ""; // This wipes out all child elements inside .random
    }
    
})

const lightbox=document.createElement("div");
lightbox.id="lightbox";
document.body.appendChild(lightbox);
const images=document.querySelectorAll("img");
images.forEach(image=>{
    image.addEventListener("click",()=>{
        lightbox.classList.add("active");
        const img=document.createElement("img");
        img.src=image.src;
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img); 
    })
})

lightbox.addEventListener("click", (e)=>{
    if(e.target  == e.currenttarget) return
    lightbox.classList.remove("active");
} );