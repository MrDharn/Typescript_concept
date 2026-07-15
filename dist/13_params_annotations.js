"use strict";
const nums12 = [1, 2, 4];
const double = nums12.map((n) => n * 2);
const times2 = (n) => n * 2;
function pointFromOrigin(p) {
    return Math.hypot(p.x, p.y);
}
console.log(pointFromOrigin({ x: 30, y: 10 }));
