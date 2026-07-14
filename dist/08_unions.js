"use strict";
function printId(id) {
    if (typeof id === 'string') {
        id.toUpperCase();
    }
    else {
        id.toFixed(2);
    }
    console.log(id);
}
function describeUser(u) {
    if (u.role === "Admin") {
        console.log(u.permissions);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
function describeUserWithInOperator(u) {
    if ("permissions" in u) {
        console.log(u.role);
    }
    else {
        console.log(u.loyaltyPoints);
    }
}
//array of unions and unions of array
const arrOfUnion = ["a", 1, "b", 5];
const unionOfArray = Math.random() > 0.1 ? ["x", "3"] : [1, 2];
// unionOfArray.push("2")
