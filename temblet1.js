let link = document.querySelector('.link')
let icon = document.querySelector('.icon')
let nav = document.querySelector(".nav");
link.classList.add("hide")
nav.onclick = function(){
    nav.classList.toggle("click");
    link.classList.toggle("hide");
}