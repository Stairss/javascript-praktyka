const clock = () => {
    const time = new Date();
    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() :
        time.getSeconds()
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();


    document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(clock, 1000);