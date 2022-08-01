// VARIABLES TO SHOW MENU AND HIDE MENU
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// SHOW MENU
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('showMenu')
    }) 
}

// HIDE MENU
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showMenu')
    })
}

// HIDE MENU AFTER CLICKING NAV ITEM
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    nav-menubar.classList.remove('showMenu');
}
navLink.forEach(link => link.addEventListener('click', linkAction));