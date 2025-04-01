const stopwatchDisplay = document.querySelector('.stopwatch-display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

startBtn.onclick = () => start();
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

stopBtn.onclick = () => stop();
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
    
}

resetBtn.onclick = () => reset();
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    stopwatchDisplay.textContent = '00:00:00:00';
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor(elapsedTime / 60000 % 60);;
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    miliseconds = miliseconds.toString().padStart(2, 0);

    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}