// IMPORTS


import { changeHeight, observer, slider } from "../components/testimonials.js";
import { carousel } from "../components/featured.js";
import { imgPositioning, observer2, heroFlyingElements } from "../components/flyingphones.js";

import { menuScrolled  } from "../components/header.js";
import { randomInteger } from "../components/flying-dots.js";
// FUNCTION EXECUTION


/* header: start */

    // check if window is scrolled down
      menuScrolled();
      window.addEventListener('scroll', menuScrolled);
    


     


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
heroFlyingElements();
window.addEventListener("resize", heroFlyingElements);

/* hero: end */

const textDisplay = document.getElementById('typingText') // elementas kuriame atvaizduosime einamaja fraze
const phrases = ['Success', 'Business', 'Services'] // zodziai kuriuos reikia spausdinti
let i = 0  //zodziu sarase indexas
let j = 0  // raidziu zodyje indeksas
let currentPhrase = [] //einamuoju metu sirinkta zodzio dalis
let isDeleting = false //ar reikia trinti ar spausdinti
let isEnd = false //ar pasibaige ziodzio raides ar ne

function loop () {  //pagrindine funkcija, kuri su setTimeout suksis pasikartodama su tam tikra pauze
  isEnd = false; //pasitikrinam ar nempasiekem zodzio galo
  textDisplay.innerHTML = currentPhrase.join(''); //atspausdinam einamaja fraze DOM elemente

  if (i < phrases.length) {  //patikrinam ar nesibaige zodziai sarase

    if (!isDeleting && j <= phrases[i].length) { //jeigu siu metu nereikia trinti (reiskais reikai spausdinti, ir jeigu j indexas nevirsija zodzio ilgio)
      currentPhrase.push(phrases[i][j]);         //tada idedam i einamaja fraze sekancia zodzio raide
      j++;
      textDisplay.innerHTML = currentPhrase.join(''); //vel atrspausdinam i DOM
    };

    if(isDeleting ) {  //jeigu reikai trinti, trinam viena raide
      currentPhrase.pop(phrases[i][j]); //nutrinam viena raide
      j--; //raidziu indeksa sumazinam
      textDisplay.innerHTML = currentPhrase.join(''); //vel atspausdinam
    };

    if (j == phrases[i].length) { //jeigu pasiekem zodzio pabaiga, 
      isEnd = true                // isEnd true
      isDeleting = true           // dabar jau reiks trinti
    }

    if (isDeleting && j === 0) {  //jeigu reikia trinit ir pasiekiam zodzio 'pabaiga'
      currentPhrase = []
      isDeleting = false          //perjungiam i false
      i++                         // paimam sekanti zodi is saraso
      if (i === phrases.length) { //jeigu pasiekima paskutini zodi, vel imam pirma zodi is saraso
        i = 0
      }
    }
  }
  const spedUp = 50;  //sita greiti naudojam kad trintu greiciau negu spausdina
  const normalSpeed = 100; // normalus spausdinimo greitis
  const time = isEnd ? 1000 : isDeleting ? spedUp : normalSpeed //ternary pasitikrinimui koki greiti naudoti
  setTimeout(loop, time) //sita dalis vel iskvies vis funkcija tik po tam tikro intervalo
}

loop(); //pirma karta iskvieciam funkcija, kad loopas uzsikurtu



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
observer2.observe(document.querySelector('.animated4-2'));

observer2.observe(document.querySelector('.animated5'));
observer2.observe(document.querySelector('.animated5-2'));

observer2.observe(document.querySelector('.animated6'));
observer2.observe(document.querySelector('.animated6-2'));

//apearing animation end

/* experiance: end */

/* girl with phone: start */
// observer2.observe(document.querySelector('.girl-animate'));
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
     
      number1 <= 310 ? number1 = number1 + 10 : '';
   
    }, 10);
  }
});
const observer4 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setInterval(function(){ 
        object2.innerText = number2 + '%';
       
        number2 <= 88 ? number2 = number2 + 1: '';
     
      }, 10);
    }
  });

const observer5 = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    setInterval(function(){ 
        object3.innerText = number3;
       
        number3 <= 1320 ? number3 = number3 + 30: '';
      }, 10);
    }
  });

const observer6 = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    setInterval(function(){ 
      object4.innerText = number4 + '%';
     
      number4 <= 92 ? number4 = number4 + 2: '';
    }, 10);
  }
});


observer3.observe(objects[0]);
observer4.observe(objects[1]);
observer5.observe(objects[2]);
observer6.observe(objects[3]);
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

observer2.observe(document.getElementById('seo-img'));


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
    
        observer.observe(document.querySelector('.testimonials .animated'));
        observer.observe(document.querySelector('.testimonials .animated2'));
    //apearing animation end

  
/* testimonials: end */



/* footer: start */
/* footer: end */

// Flying dots


