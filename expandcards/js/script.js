'use strict';


const panels = document.querySelectorAll('.panel');
const boxes = document.querySelectorAll('.infobox');
console.log(boxes);

// PANELS

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
        addText();
        
    })

})



function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');

    })
}



function addText() {
    boxes.forEach((infobox) => {
        infobox.classList.add('infobox-v');
    })
}
