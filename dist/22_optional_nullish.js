"use strict";
function describeUserExample(u) {
    if ("permissions" in u) {
        return `This is Admin ${u.role}`;
    }
    return `User ${u.createdAt.toISOString()}`;
}
console.log(describeUserExample({ role: "Admin", permissions: ['walking'] }));
const P1N3 = { name: "dharn" };
const P1N2 = { name: "steve", contact: { email: "dharn@example" } };
P1N2.contact?.email;
const countFromServer = 50;
// const aN3 = countFromServer ? countFromServer : 100
const aN4 = countFromServer ?? 100; //checks only null and undefined
const aN5 = countFromServer || 100; //this checks for only 
console.log(aN5, aN4);
