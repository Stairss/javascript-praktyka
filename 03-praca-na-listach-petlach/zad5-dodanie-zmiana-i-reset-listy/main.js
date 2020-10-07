let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const btnReset = document.createElement("button");
    const list = document.createElement("ul");
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(list);
    btn.style.width = "200px";
    btn.style.height = "40px";
    btn.style.borderRadius = "10px";
    btnReset.style.width = "200px";
    btnReset.style.height = "40px";
    btnReset.style.borderRadius = "10px";
    btn.textContent = "Stwórz listę";
    btnReset.textContent = "Wyczyść";
    btn.addEventListener("click", createLiElements)
    btnReset.addEventListener("click", cleanList);
}

const createLiElements = () => {

    const list = document.querySelector("ul");
    for (i = 0; i < 10; i++) {
        const li = document.createElement('li');
        list.appendChild(li);
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`
    }

}

const cleanList = () => {
    const list = document.querySelector("ul");
    list.textContent = "";
    size = 10;
    orderElement = 1;
}

init()