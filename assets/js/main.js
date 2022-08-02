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

// SKILL BAR
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})