const inputSearch = document.querySelector('input.search');
const inputEnterTask = document.querySelector('input.enterTask');
const ul = document.querySelector('ul');
const liElements = document.getElementsByClassName('task');
const li = document.querySelectorAll('li');
const resetBtn = document.querySelector('.reset');
let taskNumber = document.querySelector('span');

const addElement = (e) => {
    e.preventDefault();
    const task = inputEnterTask.value;
    if (task === "") return;
    const createLi = document.createElement('li');
    ul.appendChild(createLi);
    createLi.className = "task";
    createLi.innerHTML = task + "<button>Usuń</button>"
    taskNumber.textContent = liElements.length;
    inputEnterTask.value = "";
    createLi.querySelector('button').addEventListener('click', removeElement)
}

const removeElement = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = liElements.length;

}
const resetList = () => {
    ul.textContent = "";
    taskNumber.textContent = liElements.length;

}

resetBtn.addEventListener('click', resetList);
document.querySelector('form').addEventListener('submit', addElement);