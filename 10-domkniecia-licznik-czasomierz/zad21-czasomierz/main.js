/* const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'możesz kupić piwo': 'nie możesz kupić piwa'}`);
    }
    return showName;
}
const mieszko = user("Mieszko", 20);
const jagienka = user("Jagnienka", 17)
mieszko();
jagienka();

const noName = user();
noName(); */



// let time = 0;


// setInterval(() => {
//     document.body.textContent = `${time} sekund`


//     time++;
// }, 1000)

const time = () => {
    let time = 0;
    const timeSpend = function () {
        setInterval(() => {
            document.body.textContent = `${time} sekund`

            time++;

        }, 1000)
    }
    return timeSpend;
}

const timer = time();
timer();