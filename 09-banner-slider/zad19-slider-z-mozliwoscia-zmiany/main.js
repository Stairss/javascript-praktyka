const slideList = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst'
},
{
    img: "images/img2.jpg",
    text: 'Drugi tekst'
},
{
    img: "images/img3.jpg",
    text: 'Trzeci tekst'
}
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs

const time = 3000;
let active = 0;

// Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}


const keyChangeSlide = (e) => {
    switch (e.keyCode) {
        case 37:
            if (active === 0) {
                active = slideList.length;
            }
            active--;
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            clearInterval(timer);
            timer = setInterval(changeSlide, time)
            changeDot()
            break;
        case 39:
            active++;
            if (active === slideList.length) {
                active = 0;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            clearInterval(timer);
            timer = setInterval(changeSlide, time)
            changeDot()
            break;


    }
}
let timer = setInterval(changeSlide, time)

// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)