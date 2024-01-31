window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");
    }
}

document.addEventListener('click', e =>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropDown =>{
        if(dropDown === currentDropdown) return
        dropDown.classList.remove('active')
    })
})

function portfolio(){
    window.location = "portfolio.html";
}

function home(){
    window.location = "index.html";
}

function aboutus(){
    window.location = "aboutus.html";
}

function service(){
    window.location = "service.html";
}

function contactus(){
    window.location = "contactus.html";
}