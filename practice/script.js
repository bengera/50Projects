const container = document.querySelector('.container')
const button = document.getElementById('button');

button.addEventListener('click', () => {
    console.log('button-clicked')

    //CREATE DIV
    const div = document.createElement("div")
    div.setAttribute("id", "div-task")
    const divContent = document.createTextNode("This is a task")
    div.appendChild(divContent);
    container.appendChild(div)
    

    //CREATE BUTTON
    const newbtn = document.createElement('BUTTON')
    newbtn.setAttribute("id", "new-button")
    newbtn.innerHTML = "Created button"
    container.appendChild(newbtn);
})