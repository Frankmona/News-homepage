const navBar = document.querySelector(".sidebar")
const closeNavbarBtn =  document.querySelector(".close-btn")
const OpenNavbarBtn =  document.querySelector(".nav-toggle")


closeNavbarBtn.addEventListener('click', function(){
    navBar.style.right = "-300px"
})

OpenNavbarBtn.addEventListener("click", function(){
    navBar.style.right = "0px"
})

