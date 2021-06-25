const menuitem = document.querySelector('.menu');
const slidebar = document.querySelector('.links');
const modalbutton = document.querySelector('.btn-register');
const modalclose = document.querySelector('.btn-close');
const form = document.querySelector('.form-container');
const bodyselect = document.querySelector('body');

function slideBar() {
    menuitem.addEventListener('click', function(){
        slidebar.classList.toggle('links-active');
    });
}

function modalMenu() {
    modalbutton.addEventListener('click', function(){
        form.classList.add('form-container-active');
        bodyselect.classList.add('disable'); 
    });
}

function modalClose() {
    modalclose.addEventListener('click', function(){
        form.classList.remove('form-container-active');
        bodyseelect.classList.remove('disable');
    });
}

slideBar();
modalMenu();
modalClose();