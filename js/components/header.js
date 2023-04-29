

function menuScrolled() {
    if (window.scrollY > 10){
      document.getElementById('header').classList.add('scrolled');
    } else {
      document.getElementById('header').classList.remove('scrolled');
    };
  };


  // Search show hidde

   
   

  export { menuScrolled };