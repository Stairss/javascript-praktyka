const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShowAdvice = document.querySelector('.showAdvice');
const btnShowOptions = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');
let input = document.querySelector('input');


let options = ["walcz", "przemyśl to jeszcze raz"];

const add = (e) => {
    let newItem = input.value;
    e.preventDefault();
    if (newItem) {
        for (option of options) {
            if (option === newItem) {
                alert("to już jest");
                return;
            }


        }

        options.push(newItem);
        console.log(`${options}`);
        input.value = '';


    }
}
const clean = (e) => {
    e.preventDefault();
    options = [];
}
const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length)

    options.forEach(option => {
        h1.textContent = `${options[index]}`


    })
}
const showOptions = () => {
    alert(`Twoje możliwe wybory to: ${options}`);
}

btnAdd.addEventListener('click', add)
btnClean.addEventListener('click', clean)
btnShowAdvice.addEventListener('click', showAdvice)
btnShowOptions.addEventListener('click', showOptions)