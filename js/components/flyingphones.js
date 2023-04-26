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
  
    console.log(ratio);
  }

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation');
      }
    });
  });

  export { imgPositioning, observer2 }