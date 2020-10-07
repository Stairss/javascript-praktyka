const btn = document.querySelector("button");
let number = 1;
let activeNumber = 1

const addElement = function () {

    const div = document.createElement('div');

    div.textContent = number;

    /*  if (number % 5 == 0) {
         div.classList.add("circle");
     } */
    if (activeNumber == 3) {
        activeNumber = 0;
        div.classList.add("circle");
        console.log(activeNumber);

    }
    document.body.appendChild(div);
    number++;
    activeNumber++;

}
btn.addEventListener("click", addElement)