const buttons = document.querySelectorAll('.btn')
const menus = document.querySelectorAll('.menu')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        
        for (i = 0; i < menus.length; i++) {
            menus[i].classList.toggle('show')
            
        }

        

        

        // console.log('Button Clicked')
        // menu.classList.toggle('show')
        
    })
})

