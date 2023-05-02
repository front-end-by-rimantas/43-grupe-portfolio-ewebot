function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  const w = window.innerWidth;
  const h = window.innerHeight;
  let pozX = 0;
  let pozY = 0;
  let color =1;
  let time = 8;
  let animation = 1;
  let spalvosKlase = '';
  const taskiukaiDiv = document.getElementById('flying-dots-wrapper');
  let i = 0;
  
  
  function naujasTaskiukas(){
    let taskiukai = taskiukaiDiv.querySelectorAll('.dot');
    time = randomInteger(8,11);
    animation = randomInteger(1,2);

    if (i < 15){
        let taskiukas = taskiukaiDiv.querySelector(`.dot${i}`);
        color = randomInteger(1,5);
        switch (color) {
            case 1:
               spalvosKlase = 'orange';
               break;
            case 2:
                spalvosKlase = 'green';
                break;
            case 3:
                spalvosKlase = 'cyan';
                break;
            case 4:
                spalvosKlase = 'violet';
                break;
            case 5:
                spalvosKlase = 'pink';
                break;
          }
        taskiukas.className=`dot dot${i}`;
        taskiukas.classList.add(spalvosKlase);
        
        taskiukas.style.setProperty('--x', pozX + randomInteger(50, w) + 'px');
        taskiukas.style.setProperty('--y', pozY + randomInteger(50, h-200) + 'px');
        taskiukas.style.setProperty('--time', time + 's');
        taskiukas.style.setProperty('--animation', 'taskiukai'+animation);
        taskiukas.classList.add('animation');
        i++;
        if (i === 15){ i=0};
    } 
   
  }
  
  let intervalas = setInterval(naujasTaskiukas, 500);

export { randomInteger };