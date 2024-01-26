import Notiflix, { Notify } from "notiflix";
Notiflix.Notify.init({position: "center-top"});

const form = document.querySelector(".form");
const delayEl = document.querySelector("[name='delay']");
const stepEl = document.querySelector("[name='step']");
const amountEl = document.querySelector("[name='amount']");
const submitBtn = document.querySelector("button[type='submit']");

form.addEventListener("submit", onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();

  let delay = Number(delayEl.value);
  let step = Number(stepEl.value);
  let amount = Number(amountEl.value);
 

  for (let i = 1; i <= amount; i++) {
    let position = i;
    createPromise(position, delay)
    .then(({ position, delay }) => {
      return Notify.success(`Fulfilled promise ${position} in ${delay}ms`)})
    .catch(({ position, delay }) => {
      return Notify.failure(`Rejected promise ${position} in ${delay}ms`)
    });
    
    delay += step;
  }
}

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  })

}
