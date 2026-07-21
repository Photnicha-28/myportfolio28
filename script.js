const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity=1;

card.style.transform="translateY(0px)";

}

})

})

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(60px)";

card.style.transition=".8s";

});
