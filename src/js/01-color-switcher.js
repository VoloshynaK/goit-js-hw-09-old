import "../css/common.css";

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

let intervalId = null;
stopBtn.setAttribute("disable", "");

startBtn.addEventListener("click", onStartBtn);
stopBtn.addEventListener("click", onStopBtn);

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function onStartBtn() {
    if (startBtn.hasAttribute("disable")) {
        return;
    }
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startBtn.setAttribute("disable", "");
    startBtn.style.cssText = `filter: blur(1px)`;
    stopBtn.removeAttribute("disable", "");
    stopBtn.style.cssText = `filter: blur(0px)`;
};

function onStopBtn() {
    clearInterval(intervalId);
    startBtn.removeAttribute("disable", "");
    startBtn.style.cssText = `filter: blur(0px)`;
    stopBtn.setAttribute("disable", "");
    stopBtn.style.cssText = `filter: blur(1px)`;
}

