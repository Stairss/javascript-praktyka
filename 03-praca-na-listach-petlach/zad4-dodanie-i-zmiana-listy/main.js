/* const btn = document.querySelector('button');
const list = document.querySelector('ul');
const li = document.querySelectorAll('li');
let size = 10;
const setDisplay = function () {
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "block";
        li[i].style.fontSize = size + "px";
    }
    size += 1;
}
btn.addEventListener("click", setDisplay);

const forEach = li.forEach(() => {
    console.log('test');
});

btn.addEventListener("click", forEach); */

const btn = document.querySelector('button');
const liItems = document.querySelectorAll('li');
let size = 10;

/* btn.addEventListener("click", () => {

    for (let i = 0; i < liItems.length; i++) {
        if (liItems[i].style.display) {
            liItems[i].style.display = "block";
        }

        liItems[i].style.fontSize = size + "px";
    }
    size += 1;



}) */

btn.addEventListener("click", () => {

    liItems.forEach((liItem) => {
        liItem.style.display = "block";
        liItem.style.fontSize = `${size}px`
    })
    size++;
})