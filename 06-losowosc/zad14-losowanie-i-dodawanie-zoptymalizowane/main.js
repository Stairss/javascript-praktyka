const options = ['opcja 1', 'opcja 2'];
const input = document.querySelector('input').value;
const addOption = (e) => {
    e.preventDefault();

    options.push();
    console.log(options);

    const resetOptions = (e) => {
        e.preventDefault();
        options.length = 0;
    }

    const showOptions = () => {
        alert(options.join("--- ---"))
    }
    document.querySelector('.add').addEventListener('click', addOption)
    document.querySelector('.showOptions').addEventListener('click', showOptions)
    document.querySelector('.clean').addEventListener('click', resetOptions)