const btn = document.querySelector("button");

let number = 1;
let activeNumber = 1;

const addListElement = function () {
    const list = document.querySelector('ul');
    const li = document.createElement('li');

    list.appendChild(li);
    li.textContent = number;
    /* if (number % 3 == 0) {
        li.classList.add('big');
    } */
    if (activeNumber == 3) {
        activeNumber = 0;
        li.classList.add('big');
        console.log('test');

    }
    activeNumber++;
    number++;
}

btn.addEventListener("click", addListElement)