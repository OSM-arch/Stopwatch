const stopwatchDisplay = document.querySelector('.stopwatch-display');
let timer = null;          // Holds the interval ID
let startTime = 0;         // Timestamp when stopwatch starts
let elapsedTime = 0;       // Total time elapsed (ms)
let isRunning = false;     // Stopwatch state

// Button elements
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

// Start function
startBtn.onclick = () => start();
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // Adjust for paused time
        timer = setInterval(update, 10);      // Update every 10ms
        isRunning = true;
    }
}

// Stop function
stopBtn.onclick = () => stop();
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime; // Save elapsed time
        isRunning = false;
    }
}

// Reset function
resetBtn.onclick = () => reset();
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    stopwatchDisplay.textContent = '00:00:00:00';
}

// Update display
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Calculate time units
    let hours = Math.floor(elapsedTime / 3600000);
    let minutes = Math.floor(elapsedTime / 60000 % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10); // Centiseconds

    // Format with leading zeros
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    miliseconds = miliseconds.toString().padStart(2, '0');

    // Update display
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}