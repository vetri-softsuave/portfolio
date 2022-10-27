const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
let navMenuItem = document.querySelector(".nav-menu-item");
let showMenu = false;

menuBtn?.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        burger.classList.add('open');
        nav.classList.add('open');
        navMenu.classList.add('open');
        [...navMenu.children].forEach(function (child){
            child.classList.add("open");
         });
        showMenu = true;
    }

    else{
        burger.classList.remove('open');
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        [...navMenu.children].forEach(function (child){
            child.classList.remove("open");
         });
        showMenu = false;
    }
}