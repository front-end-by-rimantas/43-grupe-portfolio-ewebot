

function menuScrolled() {
    if (window.scrollY > 10){
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    };
  };

  //search bar apear and disapear
  const search = document.getElementById('search-icon');
  const html = document.querySelector("html");
  const submenu = document.getElementById('search-submenu');

  search.addEventListener("click", function (e)  {  
    if (submenu.classList.contains('active')) {
      submenu.classList.remove("active");          
    }  else {
      submenu.classList.add("active");
    } 
  });

  html.addEventListener("click", function (e) {
      if (e.target !== submenu && e.target !== search && !submenu.contains(e.target)){
        submenu.classList.remove("active");
      }         
  });

   

   //Desktop side menu slide in out
   const dskHmb = document.getElementById('desktop-hamburger');
   const overlay = document.querySelector('.side-menu-overlay');
   const sideMenu = document.getElementById('side-menu');
   const bodySlide = document.getElementById('slideAll');
   dskHmb.addEventListener('click', function(e) {
       overlay.classList.add('active');
       sideMenu.classList.add('active');
       bodySlide.classList.add('active');
   });


   overlay.addEventListener('click', function(e) {
     overlay.classList.remove('active');
     sideMenu.classList.remove('active');
     bodySlide.classList.remove('active');
     
   });


  // mobile menu reikalai
  const mobileHamburger = document.getElementById('mobile-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu-wrap');
  const close = document.getElementById('close-mobile-menu');

  mobileHamburger.addEventListener("click", function (e)  {  
      mobileMenu.classList.add("active");
  });

  close.addEventListener("click", function (e) {

      mobileMenu.classList.remove("active");         
  });
  

  html.addEventListener("click", function (e) {
    if (e.target !== mobileMenu && !mobileMenu.contains(e.target) && e.target !== mobileHamburger && !mobileHamburger.contains(e.target) ){
      mobileMenu.classList.remove("active");
    }         
});
  

//sub menu on click

const submenuLinks = document.querySelectorAll('.mobile-menu-wrap .with-submenu');

for (let i of submenuLinks){
  i.addEventListener("click", function (e)  {  
    i.classList.toggle('down');
    i.parentElement.querySelector('.submenu').classList.toggle('active');
    
});
}




  export { menuScrolled };