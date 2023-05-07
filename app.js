const todoBox = document.querySelector('.list-container');
const addBtn = document.querySelector('.add-item');
const userInput = document.querySelector('.item-input')
const getDay = document.querySelector('#get-day');
const getDate = document.querySelector('#get-date');

//add local storage



//get user name
const nameInput = document.querySelector('#name-input');
const userName = localStorage.getItem('username') || '';
nameInput.value = userName;

nameInput.addEventListener('change', e => {
    localStorage.setItem('username', e.target.value)
});

let ls = localStorage.getItem('to-do');
let todo = ls? JSON.parse(ls):[];

addBtn.addEventListener('click', function(){
    let inputData = userInput.value;
    todo.push(inputData);
    localStorage.setItem('to-do', JSON.stringify(todo));
    location.reload()
});

todo.map((data, index)=>{
    todoBox.innerHTML += `
    <li onclick='done(${index})'>
    ${data}
    <img src="./images/delete.svg" alt="" width="20px" onclick='del(${index})'>
    </li>
    `
});

function done(data) {
    console.log(todo[i]);
    let text = todo[i]
    text.style.color='red'
}

function del(e){
    let deleted = todo.filter((data, index)=>{
        return index !== e
    });
    localStorage.setItem('to-do', JSON.stringify(deleted));
    location.reload();
}

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
//console.log(formatDate(setDate));
getDate.innerText = (formatDate(setDate));



function formatDate(x) {
    var date = x.getDate();
    var month = x.getMonth();
    month++;

    var year = x.getFullYear();
    return date + '/' + month + '/' + year
}



// const li = document.createElement('li');
// li.innerHTML = `${item} <img src="./images/delete.svg" alt="" width="20px">`;
// li.addEventListener('click', function(){
//     this.classList.toggle('done')
// });
// li.querySelector('img').addEventListener('click', function(){
//     li.remove();
// })
// todoBox.appendChild(li)