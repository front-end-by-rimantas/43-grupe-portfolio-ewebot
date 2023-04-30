
function flyingObjects(selector) {
    const DOM = document.getElementById(selector)
    let HTML = '';
    
    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let left = Math.random() * (-1000 - 1) + 1;;
        HTML += `<img style= "top: ${top}px; left: ${left}px" class="x-small-img-left" src="./img/flying-objects/x-green.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }
    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let left = Math.random() * (-1000 - 1) + 1;;
        HTML += `<img style= "top: ${top}px; left: ${left}px" class="x-large-img-left" src="./img/flying-objects/x-blue.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }
    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let left = Math.random() * (-1000 - 10) + 1;;
        HTML += `<img style= "top: ${top}px; left: ${left}px" class="triangle-img-left" src="./img/flying-objects/triangle_orange.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }
    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let left = Math.random() * (-1000 - 10) + 1;;
        HTML += `<img style= "top: ${top}px; left: ${left}px" class="triangle-img-left" src="./img/flying-objects/triangle_blue.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }
    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let left = Math.random() * (-1000 - 10) + 1;;
        HTML += `<img style= "top: ${top}px; left: ${left}px" class="triangle-img-left" src="./img/flying-objects/circle.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }

    //right side 

    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let right = Math.random() * (-1000 - 1) + 1;;
        HTML += `<img style= "top: ${top}px; right: ${right}px" class="x-small-img-right" src="./img/flying-objects/x-green.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }
    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let right = Math.random() * (-1000 - 1) + 1;;
        HTML += `<img style= "top: ${top}px; right: ${right}px" class="x-large-img-right" src="./img/flying-objects/x-blue.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }
    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let right = Math.random() * (-1000 - 10) + 1;;
        HTML += `<img style= "top: ${top}px; right: ${right}px" class="triangle-img-right" src="./img/flying-objects/triangle_orange.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }
    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let right = Math.random() * (-1000 - 10) + 1;;
        HTML += `<img style= "top: ${top}px; right: ${right}px" class="triangle-img-right" src="./img/flying-objects/triangle_blue.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }
    for (let i = 0; i < 2; i++){
        let top = Math.random() * (700 - 1) + 1; ;
        let right = Math.random() * (-1000 - 10) + 1;;
        HTML += `<img style= "top: ${top}px; right: ${right}px" class="triangle-img-right" src="./img/flying-objects/circle.png" alt="">                       
        `
        DOM.innerHTML = HTML;
    }
  }

export { flyingObjects }