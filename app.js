const todoBox = document.querySelector('.list-container');
const addBtn = document.querySelector('.add-item');
const inputBox = document.querySelector('.item-input');

//const nameInput = document.querySelector('#name-input');

window.addEventListener('load', function(){
    //get user name
    const nameInput = document.querySelector('#name-input');
    const userName = localStorage.getItem('username') || '';
    nameInput.value = userName;

    nameInput.addEventListener('change', e =>{
        localStorage.setItem('username', e.target.value)
    });

    //get to do items
    toDos = JSON.parse(localStorage.getItem('to-dos')) || [];
    inputBox.value = toDos;

    todoBox.localStorage.setItem('to-dos', toDos);
    


})

addBtn.addEventListener('click', function(){
    if(inputBox.value !== ''){
        addTodo(inputBox.value);
        inputBox.value = '';
    }
})

const addTodo = item =>{
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item} <img src="./images/delete.svg" alt="" width="20px">`;
    listItem.addEventListener('click', function(){
        this.classList.toggle('done')
    });
    listItem.querySelector('img').addEventListener('click', function(){
        listItem.remove();
    })
    todoBox.appendChild(listItem)
}