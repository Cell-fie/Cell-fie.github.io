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

// check if document content is loaded
window.addEventListener("DOMContentLoaded", (event) => {
    // make list to reference each dropdown button
    const btns = [document.querySelector('#dropdown-links1'), document.querySelector('#dropdown-links2'),document.querySelector('#dropdown-links3'),document.querySelector('#dropdown-links4')]
    // make list to reference images
    const links = [document.querySelector('.img-1'), document.querySelector('.img-2'),document.querySelector('.img-3'),document.querySelector('.img-4')]
    //establish variable for footer
    const footer = document.querySelector('.examples .footer__container')
    //make number list to track non-current button indices
    const nums = [0,1,2,3]
    //make number list to track footer position
    const strum = ['zero', 'one', 'two', 'three']
    const strumb = ['zero', 'one', 'two', 'three']
    
    //for each button
    for (let i = 0; i < 4; i++){
        // when dropdown buttons are clicked...
        btns[i].addEventListener('click', function(){
            //remove index of current button from nums list
            nums.splice(i,1)
            strum.splice(i,1)
            // if any of the other dropdown images are showing (active), make the image inactive
            for (let x = 0; x<3; x++){
                if(links[nums[x]].classList.toggle("active")){
                    links[nums[x]].classList.toggle("active");
                }; 
                strumma = Array.from(footer.classList).includes(strum[x])
                if(strumma){
                    footer.classList.toggle(strum[x])
                };            
            }
            
            // mark the current image as active
            links[i].classList.toggle('active');

            //set footer to position corresponding to current image
            strum.splice(i,0,strumb[i])
            footer.classList.toggle(strum[i]);
            console.log(footer.classList)
                     
            //add index of checked button to nums list
            nums.splice(i,0,i)     
        });       
    }
});