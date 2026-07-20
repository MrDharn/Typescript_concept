"use strict";
const promise = Promise.resolve("dharn");
const promise2 = Promise.resolve(200);
async function fetchUser() {
    return {
        id: 1,
        name: "Daniel"
    };
}
async function getData() {
    return Promise.all([
        Promise.resolve(1),
        Promise.resolve("x")
    ]);
}
const newData = [1, "x"];
const user111 = { id: 1, name: "Daniel" };
const user112 = { id: 10, name: "Bull" };
