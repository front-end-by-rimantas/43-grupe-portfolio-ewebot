// IMPORTS


// FUNCTION EXECUTION


/* header: start */
/* header: end */

/* hero: start */
/* hero: end */

/* partners: start */
/* partners: end */

/* why choose us: start */
/* why choose us: end */

/* experiance: start */
/* experiance: end */

/* girl with phone: start */
/* girl with phone: end */

/* featured projects: start */
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
let dotai = document.getElementsByClassName("dot");


dotai[0].addEventListener('click', function () {
    dotai[0].classList.add("active");
    dotai[1].classList.remove("active");
    dotai[2].classList.remove("active");
   });


dotai[1].addEventListener('click', function () {
    dotai[1].classList.add("active");
    dotai[0].classList.remove("active");
    dotai[2].classList.remove("active");
   });

dotai[2].addEventListener('click', function () {
    dotai[2].classList.add("active");
    dotai[1].classList.remove("active");
    dotai[0].classList.remove("active");
   });

// document.getElementsByClassName("dot").addEventListener('click', function handleClick(event) {
//     // event.target.classList.add('bg-yellow');
//     console.log('jeeee');
//   });

// // document.getElementsByClassName("dot").onclick = function() {
// //     console.log("labas");
// //   };
// //   console.log("labas");
  
/* testimonials: end */

/* footer: start */
/* footer: end */