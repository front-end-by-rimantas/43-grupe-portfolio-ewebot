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
        //balloon aukstis funkcija kad balloonas butu nemaziau negu betkurio slido auksciui
        function changeHeight(){
          const slides = document.getElementsByClassName("slide");
          let heights = [];
          for (let i of slides){
              heights.push(parseInt(i.offsetHeight,10))
          }
          const height =(Math.max(...heights)+1)+'px';
          document.getElementById("balloon").style.height = height;
      };

      //iskvieciam funkcija 
      window.addEventListener("resize", changeHeight);
      window.onresize = changeHeight();


      //Scrolling slides navigation dots behavior 
      let dotai = document.getElementsByClassName("dot");
      let slideWidth = document.getElementsByClassName("slide");

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

      function resize2(){
        let dotai2 = document.getElementsByClassName("dot");
        let nth = -1;
        for (let i=0; i<dotai2.length; i++){
          if (dotai2[i].classList.contains('active')){
            nth = i;
            console.log(nth);
          }

          if (nth===0){
            document.getElementById("slides-container").style.transform = `translate(0px, 0px)`;
          } else if(nth===1){
            document.getElementById("slides-container").style.transform = `translate(-${slideWidth[0].offsetWidth+20}px, 0px)`;
          } else if (nth===2){
            document.getElementById("slides-container").style.transform = `translate(-${slideWidth[0].offsetWidth+slideWidth[1].offsetWidth+70}px, 0px)`;
          }
          
        }

      };

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