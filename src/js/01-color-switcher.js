import "../css/common.css";

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

let intervalId = null;
stopBtn.disabled = true;

startBtn.addEventListener("click", onStartBtn);
stopBtn.addEventListener("click", onStopBtn);

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function onStartBtn() {
    if (startBtn.disabled) {
        return;
    }
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
};

function onStopBtn() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

