"use strict";
function id(x) {
    return x;
}
const xyz = id(5);
console.log(xyz + 1);
function wrap(value) {
    return { value };
}
