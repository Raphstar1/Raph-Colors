const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navLogo = doccument.querySelector('.navbar__logo');

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);  

//show active menu when scrolling
const hightlightMenu = () >= {
    const elem = document.querySelector('.hightlight');
    const homeMenu = document.querySelector('#home-page'); 
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = windows.scrollY;
    // console.log(scrollPos);

// adds 'hightlight' class to my menu item
if(windows.innerwidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
} else if (window.innerwidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('hightlight');
    return;
}else if (window.innerwidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add ('hightlight');
    homeMenu.classList.remove('highlight');
    return;
}

 if (elem && window.innerwidth < 960 && scrollPos < 600) || elem) {
     elem.classList.remove('highligh');
 }
}; 
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close Menu when clicking on menu item
const hideMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerwidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menulinks.classList.remove('active');
    }
};

menulinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);