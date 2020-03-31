let navbar = document.getElementById("navbar");
let menuButton = document.querySelector(".menu-button");
let navAnchors = navbar.childNodes;

function toggleMenu() {
    menuButton.classList.toggle("button-close");

    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    }
    else {
        navbar.style.display = 'flex';
    }
}

for (let anchor of navAnchors) {
    anchor.addEventListener('click', function() {
        navbar.style.display = 'none';
        menuButton.classList.toggle("button-close");
    })
}

menuButton.addEventListener("click", toggleMenu);

window.addEventListener("resize", function() {
    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
        navbar.style.display = null;
        menuButton.classList.remove("button-close");
    }
    
})