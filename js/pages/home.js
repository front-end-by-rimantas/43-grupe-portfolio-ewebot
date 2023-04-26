// IMPORTS


import { changeHeight, observer, slider } from "../components/testimonials.js";
import { carousel } from "../components/featured.js";
import { imgPositioning, observer2 } from "../components/flyingphones.js";

// FUNCTION EXECUTION


/* header: start */
/* header: end */

/* back to top: start */
const goTopBtn = document.querySelector('.btn-back2top');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 1000) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
};

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

/* back to top: end */

/* hero: start */
/* hero: end */

const textai = document.getElementById('typingText').innerText;
const zodziai = textai.split(',');

console.log(zodziai);
int1 = setInterval(test, 90);

const xxx = document.getElementById('typingText');
let zodis1 = zodziai[0];

function test() {
  xxx.innerText = zodis1;
  zodis1 = zodis1.slice(0,-1); 
  zodis1.lenght === 0 ? clearInterval(int1):'';
}



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
observer2.observe(document.querySelector('.girl-animate'));

observer2.observe(document.querySelector('.numeric')); 
const objects = document.querySelectorAll('.numeric');
const object1 = objects[0];
let number1 = 0;

const object2 = objects[1];
let number2 = 0;

const object3 = objects[2];
let number3 = 0;

const object4 = objects[3];
let number4 = 0;

const observer3 = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    setInterval(function(){ 
      object1.innerText = number1 + 'm';
      object2.innerText = number2 + '%';
      object3.innerText = number3;
      object4.innerText = number4 + '%';
      number1 <= 310 ? number1 = number1 + 10 : '';
      number2 <= 88 ? number2 = number2 + 1: '';
      number3 <= 1320 ? number3 = number3 + 30: '';
      number4 <= 92 ? number4 = number4 + 2: '';
    }, 10);
  }
});

observer3.observe(objects[0]);

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
        slider(elem, 'testimonials', '.dot', '--testimonial-width');
      };

      let obj2 = document.querySelectorAll('.testimonials .dot');
      for (let o of obj2){
      o.addEventListener("click", dotsScroll2);
      }

      window.addEventListener("load", changeHeight);
      window.addEventListener("resize", changeHeight);
     
    

    // Tikrinam kai stebimi objektai ivaziuoja i ekrana, prasideda ju animacija  
    
        observer.observe(document.querySelector('.animated'));
        observer.observe(document.querySelector('.animated2'));
    //apearing animation end

  
/* testimonials: end */



/* footer: start */
/* footer: end */