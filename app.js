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

const drop1 = document.querySelector('#dropdown-links1')
const dropLinks1 = document.querySelector('.img-1')

drop1.addEventListener('click', function(){
    print(true)
    dropLinks1.classList.toggle('active');
    
});

const drop2 = document.querySelector('#dropdown-links2')
const dropLinks2 = document.querySelector('.img-2')

drop2.addEventListener('click', function(){
    dropLinks2.classList.toggle('active');
});

const drop3 = document.querySelector('#dropdown-links3')
const dropLinks3 = document.querySelector('.img-3')

drop3.addEventListener('click', function(){
    dropLinks3.classList.toggle('active');
});

const drop4 = document.querySelector('#dropdown-links4')
const dropLinks4 = document.querySelector('.img-4')

drop4.addEventListener('click', function(){
    dropLinks4.classList.toggle('active');
});