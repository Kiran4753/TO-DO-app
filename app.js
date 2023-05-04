const todoBox = document.querySelector('.list-container');
const addBtn = document.querySelector('.add-item');
const inputBox = document.querySelector('.item-input');

addBtn.addEventListener('click', function(event){
    event.preventDefault()
    addTodo(inputBox.value);
    inputBox.value = '';

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