const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-ul');
const cross = document.querySelector('.cross')

hamburger.addEventListener('click',()=>{
    document.querySelector(".nav-ul").classList.add("show");
    document.querySelector(".cross").classList.add("cross-icon");
})

cross.addEventListener('click',()=>{
    document.querySelector(".nav-ul").classList.remove("show");
    document.querySelector(".cross").classList.remove("cross-icon");

})