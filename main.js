const input = document.querySelector('input');
const div = document.querySelector('div');
const submit = document.querySelector('.submit');

submit.addEventListener("click", appendNewObject);

const myArray = JSON.parse(localStorage.getItem('myArray')) || [];
loadPage();

function loadPage() {
    console.log(myArray);
    for (let i = 0; i < JSON.parse(localStorage.getItem('myArray')).length; i++) {
        const h2 = document.createElement('h2');
        div.appendChild(h2);
        h2.innerHTML = JSON.parse(localStorage.getItem('myArray'))[i].phrase;
    }
}

// localStorage.clear();

function appendNewObject() {
    const newObj = {phrase: input.value, name: input.value}
    myArray.push(newObj);
    let length = myArray.length;
    localStorage.setItem('myArray', JSON.stringify(myArray));
    const h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.innerHTML = JSON.parse(localStorage.getItem('myArray'))[length - 1].phrase;
}
