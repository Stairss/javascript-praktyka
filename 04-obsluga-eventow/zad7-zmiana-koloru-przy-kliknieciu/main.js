// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony



document.body.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const color = getColor(event);
    console.log(` ${x}, ${y}`);
    document.body.style.backgroundColor = color;


})
const getColor = (e) => {
    if (e.clientX % 2 == 0 && e.clientY % 2 == 0) {
        return "red";
    } else if (e.clientX % 2 == 1 && e.clientY % 2 == 1) {
        return "blue";
    } else {
        return "green";
    }
}

/* document.body.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x}, ${y}`);
    const color = getColor(event);
    document.body.style.backgroundColor = color;

}) */

/* const getColor = (e) => {
    if (e.clientX % 2 == 0) {
        if (e.clientY % 2 == 0) {
            return "red";
        } else {
            return "green";
        }
    } else {
        if (e.clientY % 2 == 0) {
            return "green";
        } else {
            return "blue";
        }

    }
} */

/* const getColor = (e) => {
    if (e.clientX % 2 == 0 && e.clientY % 2 == 0) {
        return "red";
    } else if (e.clientX % 2 == 1 && e.clientY % 2 == 1) {
        return "blue";
    } else {
        return "green";
    }

} */