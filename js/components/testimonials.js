//balloon aukstis funkcija kad balloonas butu nemaziau negu betkurio slido auksciui
function changeHeight(){
    const slides = document.querySelectorAll(".testimonials .slide2");
    const heights = [];
    for (let s of slides){
        heights.push(s.offsetHeight);
    };
    const height = Math.max(...heights);
    document.querySelector('.testimonials').style.setProperty("--balloon-height", height+'px');
    document.querySelector('.testimonials').style.setProperty("--testimonial-width", slides[0].offsetWidth);
};

const observer = new IntersectionObserver(entries => { //blokas skirtas stebeti kada pradedama animacija
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animation');
        }
    });
    });
        

    //dots ant slides scrolling effect
    function slider(elem, n, dotClass, cssVariable ){
        let sekcija = document.getElementById(n);
        let dotai = sekcija.querySelectorAll(dotClass);
        for (let i of dotai){
          i.classList.remove("active");
        };
        elem.classList.add("active");
    
        let siblingsCount = sekcija.querySelectorAll(dotClass).length;
        let nextSiblingsCount = 0;
        let index = 0;
        let nextSibling = elem.nextElementSibling;
        while(nextSibling) {
          nextSiblingsCount++;
          nextSibling = nextSibling.nextElementSibling;
        }
        index = siblingsCount - nextSiblingsCount - 1;

        let tesWidth = document.querySelector('.testimonials .slide2').offsetWidth;
        document.querySelector('.'+n).style.setProperty(cssVariable, tesWidth);
        document.querySelector('.'+n).style.setProperty("--testimonial-index", index);
      };
    


export { changeHeight, observer, slider };