const menuitem = document.querySelector('.menu');
const slidebar = document.querySelector('.links');
const modalbutton = document.querySelector('.btn-register');
const modalclose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal-container');
const bodyselect = document.querySelector('body');

function slideBar() {
    menuitem.addEventListener('click', function(){
        slidebar.classList.toggle('links-active');
    });
}

function modalMenu() {
    modalbutton.addEventListener('click', function(){
        modal.classList.add('modal-container-active');
    });
}

function modalClose() {
    modalclose.addEventListener('click', function(){
        modal.classList.remove('modal-container-active');
    });
}

function ChangeTransition(){
    document.querySelector(".links").style.transition = "none";
    setTimeout(function(){
    document.querySelector(".links").style.transition = "transform .3s ease-in"
    }, 1000);
    }

slideBar();
modalMenu();
modalClose();
