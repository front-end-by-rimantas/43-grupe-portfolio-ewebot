function imgPositioning (){
    let mainWidth = document.getElementById('main-img').offsetWidth;
  
    const ratio = mainWidth / 600; 
    const blue = document.getElementById('blueImg');
    const green = document.getElementById('greenImg');
    const info = document.getElementById('infoImg');
  
    blue.style.width = (417 * ratio) +'px';
    green.style.width = (380 * ratio) +'px';
    info.style.width = (235 * ratio) + 'px';

    blue.style.top = (-70)*ratio + 'px';
    blue.style.left = (85)*ratio + 'px';

    green.style.top = (-30)*ratio + 'px';
    green.style.left = (0)*ratio + 'px';

    info.style.top = (160)*ratio + 'px';
    info.style.left = (350)*ratio + 'px';
    }

//----------------

  function heroFlyingElements (){
    let mainWidth = document.getElementById('hiw').offsetWidth;
  
    const ratio = mainWidth / 785;

    const image1 = document.getElementById('fly1');
    const image2 = document.getElementById('fly2');
    const image3 = document.getElementById('fly3');
    const image4 = document.getElementById('fly4');
  
    image1.style.width = (250 * ratio) +'px';
    image2.style.width = (233 * ratio) +'px';
    image3.style.width = (192 * ratio) + 'px';
    image4.style.width = (250 * ratio) + 'px';

    image1.style.top = (120)*ratio + 'px';
    image1.style.left = (400)*ratio + 'px';

    image2.style.top = (450)*ratio + 'px';
    image2.style.left = (-40)*ratio + 'px';

    image3.style.top = (80)*ratio + 'px';
    image3.style.left = (-20)*ratio + 'px';
    
    image4.style.top = (340)*ratio + 'px';
    image4.style.left = (460)*ratio + 'px';
  
  }

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation');
      }
    });
  });

  export { imgPositioning, observer2, heroFlyingElements }