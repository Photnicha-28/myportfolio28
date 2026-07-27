const items = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

items.forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});
