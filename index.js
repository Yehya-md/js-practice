const increase = document.getElementById("btn1");
const decrease = document.getElementById("btn3");
const reset = document.getElementById("btn2");
const label = document.getElementById("demo");
let counter = 0;

increase.onclick = function () {
    counter++;
    label.innerHTML = counter;
}
decrease.onclick = function () {
    counter--;
    label.innerHTML = counter;
}
reset.onclick = function () {
    counter = 0;
    label.innerHTML = counter;
}