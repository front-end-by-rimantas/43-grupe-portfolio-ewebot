// IMPORTS
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
    
      function dots3(n){
        let dotai3 = document.getElementsByClassName("dot3");
        for (let i of dotai3){
          i.classList.remove("active");
        };
        dotai3[n].classList.add("active");

        document.getElementById('slides-wrapper').className = 'slides-wrapper';
        document.getElementById('slides-wrapper').classList.add(`slide${n}`)


      };
    
      

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
        //balloon aukstis funkcija kad balloonas butu nemaziau negu betkurio slido auksciui
        function changeHeight(){
          const slides = document.getElementsByClassName("slide2");
          let heights = [];
          for (let i of slides){
              heights.push(parseInt(i.offsetHeight,10))
          }
          const height =(Math.max(...heights)+1)+'px';
          document.getElementById("balloon").style.height = height;
      };

      //iskvieciam funkcija changeHeight() 
      window.addEventListener("resize", changeHeight);
      window.onresize = changeHeight();


      //Scrolling slides navigation dots behavior 
      let dotai = document.getElementsByClassName("dot");
      let slideWidth = document.getElementsByClassName("slide2");

      function dots(n){
        for (let i of dotai){
          i.classList.remove("active");
        };
        dotai[n].classList.add("active");

        if (n===0){
          document.getElementById("slides-container").style.transform = `translate(0px, 0px)`;
        } else if(n===1){
          document.getElementById("slides-container").style.transform = `translate(-${slideWidth[0].offsetWidth+20}px, 0px)`;
        } else if (n===2){
          document.getElementById("slides-container").style.transform = `translate(-${slideWidth[0].offsetWidth+slideWidth[1].offsetWidth+70}px, 0px)`;
        }
      };


      //funkcija, kuri tikrina ar pakeitus ekrano dydi nereikia paskrlinti slido, kad visdar butu balloono veitoje
      function resize2(){
        let dotai2 = document.getElementsByClassName("dot");
        let nth = -1;
        for (let i=0; i<dotai2.length; i++){
          if (dotai2[i].classList.contains('active')){
            nth = i;
            console.log(nth);
          }
        };

          if (nth===0){
            document.getElementById("slides-container").style.transform = `translate(0px, 0px)`;
          } else if(nth===1){
            document.getElementById("slides-container").style.transform = `translate(-${slideWidth[0].offsetWidth+20}px, 0px)`;
          } else if (nth===2){
            document.getElementById("slides-container").style.transform = `translate(-${slideWidth[0].offsetWidth+slideWidth[1].offsetWidth+70}px, 0px)`;
          }
     };
      //iskvieciam funkcija, kad resizinus ekrane, pasikeistu ir skrollo vieta
      window.addEventListener("resize", resize2);


      //dots behavior ended

    //apearing animation
        const observer = new IntersectionObserver(entries => {
            // Loop over the entries
            entries.forEach(entry => {
              // If the element is visible
              if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('animation');
              }
            });
          });
          
        // observer.observe(document.querySelector('.headers-wrapper'));
        observer.observe(document.querySelector('.animated'));
        observer.observe(document.querySelector('.animated2'));
    //apearing animation end

  
/* testimonials: end */



/* footer: start */
/* footer: end */