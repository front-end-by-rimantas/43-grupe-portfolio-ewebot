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
        // ballono aukstis
        // const slides = document.getElementsByClassName("slide");
        // console.log(slides);
        // let heights = [];
        // for (let i of slides){
        //     heights.push(parseInt(i.offsetHeight,10))
        // }
        // console.log(heights);
        // const height = Math.max(...heights);
        // console.log(height);    
        // document.getElementById("balloon").style.height = Math.max(heights)+"px";

        // console.log(document.getElementById("balloon"));


        //Scrolling slides navigation dots behavior 
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