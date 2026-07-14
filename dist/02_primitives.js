"use strict";
let username = 'dharn';
let age = 50;
let isActive = true;
const big = 2n ** 63n - 1n;
//Operator "+" cannot be applied to types biginit and number
//const mixed = big + age
const TOKEN = Symbol("TOKEN");
function yearsToDay(year) {
    return year * 365;
}
