let string="";
let buttons= document.querySelectorAll(".button");
let input=document.querySelector(".inp");
let clear=document.querySelector("#clear");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
         let input=document.querySelector(".inp");
        if(e.target.innerHTML=="="){
            input.value=eval(input.value);
        } else{
            console.log(e.target)
        string=string+ e.target.innerHTML;
       
        input.value=string;
        }
        
        
    })
})

clear.addEventListener("click",()=>{
    string="";
    input.value='';
    
})
