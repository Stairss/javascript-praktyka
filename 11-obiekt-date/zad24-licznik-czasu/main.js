const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const timerContnet = document.querySelector('.time div')
let time = 0.00;
let flag = false;
let counter;


const changeStartContent = () => {
    if (startBtn.textContent === "Start") {

        if (!flag) {
            counter = setInterval(() => {
                time += 0.01;
                timerContnet.textContent = time.toFixed(2);
            }, 10);
            flag = true;
        }
        startBtn.textContent = "Pauza";

    } else {
        if (flag) {
            clearInterval(counter);
            flag = false;

        }
        startBtn.textContent = "Start"
    }


}
const resetTimer = () => {
    timerContnet.textContent = "---";
    time = 0.00;
    clearInterval(counter);
    startBtn.textContent = "Start";
    flag = false;
}
startBtn.addEventListener('click', changeStartContent);
resetBtn.addEventListener('click', resetTimer);







// const controlBtn = document.querySelector('.main');
// const resetBtn = document.querySelector('.reset');
// const panel = document.querySelector('time .div');

// let time = 0;
// let flag = false;


// controlBtn.addEventListener('click', switching)