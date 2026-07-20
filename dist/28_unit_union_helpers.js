"use strict";
function handleEvent(e) {
    console.log(e);
}
handleEvent("click"); //only the other events other than keydownw and esc will be available to be passed
function handleAction(e) {
    console.log(e);
}
handleAction("admin"); //Only what is included in the ActionN2 will be available to be passed into the function
function multiplyNum(a, b) {
    return a * b;
}
console.log(multiplyNum(3, 10));
