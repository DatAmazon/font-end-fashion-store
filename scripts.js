const slider = document.querySelectorAll(".slider-content-item");
const next = document.querySelector(".fa-arrow-right");
const prev = document.querySelector(".fa-arrow-left");
let index = 0;

next.addEventListener("click",function(){
    slider[index].classList.remove('active')
    index = (index +1) % slider.length 
    slider[index].classList.add('active')
})

prev.addEventListener("click",function(){
    slider[index].classList.remove('active')
    index = (index -1 + slider.length) % slider.length 
    slider[index].classList.add('active')
})