const todoBox = document.querySelector('.list-container');
const addBtn = document.querySelector('.add-item');
const inputBox = document.querySelector('.item-input');
const getDay = document.querySelector('#get-day');
const getDate = document.querySelector('#get-date');

//add local storage
window.addEventListener('load', function(){
    //get user name
    const nameInput = document.querySelector('#name-input');
    const userName = localStorage.getItem('username') || '';
    nameInput.value = userName;

    nameInput.addEventListener('change', e =>{
        localStorage.setItem('username', e.target.value)
    });

    //get to do items
    //toDos = JSON.parse(localStorage.getItem('to-dos')) || [];
    //inputBox.value = toDos;

    //todoBox.localStorage.setItem('to-dos', toDos);
});

//add day
var d = new Date();
let day = d.getDay();
let setDay = day.toLocaleString;

switch (day) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}
getDay.innerText = day;



//add date 
var setDate = new Date();
console.log(formatDate(setDate));
getDate.innerText = (formatDate(setDate));



function formatDate(x){
    var date = x.getDate();
    var month = x.getMonth();
    month++;

    var year = x.getFullYear();
    return date + '/' + month + '/' + year
}

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