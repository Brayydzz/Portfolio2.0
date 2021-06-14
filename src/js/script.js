//---------------------- Accordion Skills Toggle ----------------------

const skillsContent = document.getElementsByClassName('skills-content')
        
const skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close'
    }
    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)  
})

//---------------------- Navigation Menu ----------------------



const navClose = document.getElementById('nav-close')

// Menu Show
function menuOpen() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.add('show-menu')
}

function menuHide() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

const navToggle = document.getElementById('icon-closed')
navToggle.addEventListener("click", menuOpen)
navClose.addEventListener("click", menuHide)



/*---------------------- REMOVE MENU MOBILE ----------------------*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ---------------------- Project Swiper ---------------------- 
const swiper = new Swiper('.project_container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });