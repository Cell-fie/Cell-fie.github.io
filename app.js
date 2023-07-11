const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document .addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)return
    
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

let drop1 = document.querySelector('#dropdown-links1')
let dropLinks1 = document.querySelector('.img-1')
let drop2 = document.querySelector('#dropdown-links2')
let dropLinks2 = document.querySelector('.img-2')
let drop3 = document.querySelector('#dropdown-links3')
let dropLinks3 = document.querySelector('.img-3')
let drop4 = document.querySelector('#dropdown-links4')
let dropLinks4 = document.querySelector('.img-4')

window.addEventListener("DOMContentLoaded", (event) => {
    let drop1 = document.querySelector('#dropdown-links1')
    let dropLinks1 = document.querySelector('.img-1')
    if (drop1){
        drop1.addEventListener('click', function(){
            dropLinks1.classList.toggle('active');
            window.addEventListener("DOMContentLoaded", (event) => {
                if (dropLinks2 && dropLinks2.classList.contains('active')){
                    dropLinks2.classList.toggle('active')
                }
                if (dropLinks3 && dropLinks3.classList.contains('active')){
                    dropLinks3.classList.toggle('active')
                }
                if (dropLinks4 && dropLinks4.classList.contains('active')){
                    dropLinks4.classList.toggle('active')
                }
            });
        });
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    let drop2 = document.querySelector('#dropdown-links2')
    let dropLinks2 = document.querySelector('.img-2')
    if (drop2){
        drop2.addEventListener('click', function(){
            dropLinks2.classList.toggle('active');
            window.addEventListener("DOMContentLoaded", (event) => {
                if (dropLinks1 && dropLinks1.classList.contains('active')){
                    dropLinks1.classList.toggle('active')
                }
                if (dropLinks3 && dropLinks3.classList.contains('active')){
                    dropLinks3.classList.toggle('active')
                }
                if (dropLinks4 && dropLinks4.classList.contains('active')){
                    dropLinks4.classList.toggle('active')
                }
            });
        });
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    let drop3 = document.querySelector('#dropdown-links3')
    let dropLinks3 = document.querySelector('.img-3')
    if (drop3){
        drop3.addEventListener('click', function(){
            dropLinks3.classList.toggle('active');
            window.addEventListener("DOMContentLoaded", (event) => {
                if (dropLinks2 && dropLinks2.classList.contains('active')){
                    dropLinks2.classList.toggle('active')
                }
                if (dropLinks1 && dropLinks1.classList.contains('active')){
                    dropLinks1.classList.toggle('active')
                }
                if (dropLinks4 && dropLinks4.classList.contains('active')){
                    dropLinks4.classList.toggle('active')
                }
            });
        });
    }
});

window.addEventListener("DOMContentLoaded", (event) => {
    let drop4 = document.querySelector('#dropdown-links4')
    let dropLinks4 = document.querySelector('.img-4')
    if (drop4){
        drop4.addEventListener('click', function(){
            dropLinks4.classList.toggle('active');
            window.addEventListener("DOMContentLoaded", (event) => {
                if (dropLinks2 && dropLinks2.classList.contains('active')){
                    dropLinks2.classList.toggle('active')
                }
                if (dropLinks3 && dropLinks3.classList.contains('active')){
                    dropLinks3.classList.toggle('active')
                }
                if (dropLinks1 && dropLinks1.classList.contains('active')){
                    dropLinks1.classList.toggle('active')
                }
            });
        });
    }
});