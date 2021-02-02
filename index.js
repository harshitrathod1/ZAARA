/* ======== MENU SHOW ======== */ 

function menuShow (toggleId,navId){
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
        })
    }
}

menuShow('nav-toggle','nav-menu');

/* ======== Remove Mobile Menu ======== */ 
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click',linkAction)); 

/* ======== MENU SHOW ======== */ 


/* ======== MENU SHOW ======== */ 