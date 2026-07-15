//return by inference
function sum(x, y) {
    return x + y;
}
//export
export function stringInference(s) {
    return `Hello ${s}`;
}
//Boolean to Number
function booleanToNumber(x) {
    if (x) {
        return 1;
    }
    else {
        return 0;
    }
}
//async return
async function nameIt() {
    return 42;
}
nameIt().then((n) => console.log(n));
