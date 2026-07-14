"use strict";
function nothing(msg) {
    console.log(msg);
}
function nothing2(msg) {
    throw new Error(msg);
}
const valueAny = JSON.parse('{"X": 1}');
let value = undefined;
