
/* 
const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA', ];
const messages = ["super", "działa!"]; */
/* const LCPasswords = passwords.map(password =>
    password.toLowerCase()); */
// const div = document.querySelector('div');



/*  const showMessage = (e) => {
    const text = e.target.value;

    passwords.forEach((password, index) => {
        const passwordLowerCase = password.toLowerCase();


        if (text === passwordLowerCase) {
            div.textContent = messages[index];
            e.target.value = '';



        }

    })
}


 */

/* passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();

})


const showMessage = (e) => {
    passwords.forEach((item, i) => {
        if (item.toLowerCase() === e.target.value) {
            document.querySelector('div').textContent = messages[i];
            e.target.value = '';

        }
    })
}
input.addEventListener("input", showMessage);

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
}) */
/* 
const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();

    for (let i = 0; i < LCPasswords.length; i++) {
        if (textInput === LCPasswords[i]) {
            document.querySelector('div').textContent = messages[i];
            e.target.value = '';
        }
    }
}
input.addEventListener("input", showMessage); */

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA',];
const messages = ["super", "działa!"];
const LCPasswords = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();

    for (let i = 0; i < LCPasswords.length; i++) {
        if (textInput === LCPasswords[i]) {
            document.querySelector('div').textContent = messages[i];
            e.target.value = '';
        }
    }
}



input.addEventListener('input', showMessage)