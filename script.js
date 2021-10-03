const plan = document.querySelector(".switch");
const ball = document.querySelector(".ball");
const price2 = document.querySelectorAll(".annual");
const price = document.querySelectorAll(".month");

ball.addEventListener("click", (e) => {
    const on = plan.classList.toggle("flex-end");
    if (on) {
        price.forEach((divs) => divs.classList.add("invisible"));
        price2.forEach((divs) => divs.classList.remove("invisible"));
    } else {
        price.forEach((divs) => divs.classList.remove("invisible"));
        price2.forEach((divs) => divs.classList.add("invisible"));
    }
});

window.addEventListener("keydown", (e) => {
    const on = plan.classList.toggle("flex-end");
    if (on) {
        /*pq tem q estar on e apertar */
        price.forEach((divs) => divs.classList.add("invisible"));
        price2.forEach((divs) => divs.classList.remove("invisible"));
    } else {
        price.forEach((divs) => divs.classList.remove("invisible"));
        price2.forEach((divs) => divs.classList.add("invisible"));
    }
});
