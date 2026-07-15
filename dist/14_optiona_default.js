"use strict";
function default1(name) {
    // const res = name?.toUpperCase()
    //use conditional
    const res = name ? name?.toUpperCase() : "Guest";
    return `Hello there ${res}`;
}
// console.log(default1("dharn"))
// console.log(default1())
//or
function default2(name = "Guest") {
    const res = name?.toUpperCase();
    return `Hello there ${res}`;
}
console.log(default2("dharn"));
console.log(default2());
function connection(host, port, secure) {
    // const p = port?? 80
    // const s = secure??false
    //Or this way
    const p = port ? port : 80;
    const s = secure ? secure : false;
    return `${host} port: ${p} secure: ${s}`;
}
console.log(connection("localhost:3000//"));
