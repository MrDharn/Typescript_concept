"use strict";
function userPropD(param, param2) {
    return param[param2];
}
const uND = {
    id: "2",
    name: "1",
};
console.log(userPropD(uND, "name"));
//editing 
function setUserPropD(param1, param2, param3) {
    param1[param2] = param3;
}
setUserPropD(uND, "name", 'john');
