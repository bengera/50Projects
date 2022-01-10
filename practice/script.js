const container = document.querySelector('.container')
const button = document.getElementById('button');
const inputField = document.getElementById('inputField')
const taskContainer = document.querySelector('.tasks-container')


button.addEventListener('click', () => {
    
    console.log('button-clicked')

    const taskItem = document.createElement('div')
    taskItem.setAttribute("id", "task")
    const taskItemText = document.createElement('p')
    taskItemText.setAttribute("id", "task-text")
    taskItemText.innerText = inputField.value;
    taskContainer.appendChild(taskItem);
    taskItem.appendChild(taskItemText);
    inputField.value = '';

    const newbtn = document.createElement('BUTTON')
        newbtn.setAttribute("id", "new-button")
        newbtn.innerHTML = "Delete"
        taskItem.appendChild(newbtn);

        newbtn.addEventListener('click', () => {
            console.log('deleted-item')
            taskItem.remove();
        })

})

// button.addEventListener('click', () => {
//     console.log('button-clicked')

//     //CREATE DIV
//     const div = document.createElement("div")
//     div.setAttribute("id", "div-task")
//     const divContent = document.createTextNode("This is a task")
//     div.appendChild(divContent);
//     container.appendChild(div)
    
//     //CREATE BUTTON
//     const newbtn = document.createElement('BUTTON')
//     newbtn.setAttribute("id", "new-button")
//     newbtn.innerHTML = "Delete"
//     container.appendChild(newbtn);
// })



/*
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
*/