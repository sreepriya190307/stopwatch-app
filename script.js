let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;
let lapCount = 1;

function updateDisplay() {
    document.getElementById("display").innerText =
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}:` +
        `${String(milliseconds).padStart(2, '0')}`;
}

function start() {
    if (timer !== null) return;

    timer = setInterval(() => {
        milliseconds++;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();
    }, 10);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    pause();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCount = 1;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (timer === null) return;

    const lapTime = document.createElement("li");
    lapTime.innerText = `Lap ${lapCount}: ${document.getElementById("display").innerText}`;
    document.getElementById("laps").appendChild(lapTime);
    lapCount++;
}
