// IMPORTS


import { changeHeight, observer, slider } from "../components/testimonials.js";
import { carousel } from "../components/featured.js";
import { imgPositioning, observer2 } from "../components/flyingphones.js";

// FUNCTION EXECUTION


/* header: start */
/* header: end */

/* back to top: start */
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* back to top: end */

/* hero: start */
/* hero: end */

/* partners: start */
/* partners: end */

/* why choose us: start */
/* why choose us: end */

/* experiance: start */
imgPositioning();
window.addEventListener("resize", imgPositioning);

//apearing animation


// observer.observe(document.querySelector('.headers-wrapper'));
observer2.observe(document.querySelector('.animated'));
observer2.observe(document.querySelector('.animated2'));
observer2.observe(document.querySelector('.animated3'));
observer2.observe(document.querySelector('.animated4'));
observer2.observe(document.querySelector('.animated5'));
observer2.observe(document.querySelector('.animated6'));

//apearing animation end

/* experiance: end */

/* girl with phone: start */
/* girl with phone: end */

/* featured projects: start */

    //taskiukai violetiniai po skaidrem kad elgtusi kaip reikia
      function dotsScroll(obj){
        let elem = obj.target;
        carousel(elem, 'featured-projects', '.dot3', '--slide-number')
      };
    
      let obj = document.querySelectorAll('.dot3');
      for (let o of obj){
      o.addEventListener("click", dotsScroll);
    }

/* featured projects: end */

/* why choose us 2: start */
/* why choose us 2: end */

/* get free seo analysis?: start */
/* get free seo analysis?: end */

/* blog: start */
/* blog: end */

/* got new project: start */
/* got new project: end */

/* testimonials: start */
     
      function dotsScroll2(obj){
        let elem = obj.target;
        slider(elem, 'testimonials', '.dot', '--testimonial-width')
      };

      let obj2 = document.querySelectorAll('.testimonials .dot');
      for (let o of obj2){
      o.addEventListener("click", dotsScroll2);
      }

      changeHeight();
      window.addEventListener("resize", changeHeight);
     
    

    // Tikrinam kai stebimi objektai ivaziuoja i ekrana, prasideda ju animacija  
    
        observer.observe(document.querySelector('.animated'));
        observer.observe(document.querySelector('.animated2'));
    //apearing animation end

  
/* testimonials: end */



/* footer: start */
/* footer: end */