"use strict";
function returnTypeOfFunc(id, isExtraInfo = false) {
    return { id, name: "dharn",
        logData: isExtraInfo ? "details" : undefined
    };
}
const paramsInfo = ["id 2", true];
const resultInfo = returnTypeOfFunc(...paramsInfo);
console.log(paramsInfo, resultInfo);
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Yo , ${this.name} is here`;
    }
}
const instanceParamInfo = ["dharn", 100];
const instanceClassInfo = new PersonN1(...instanceParamInfo);
console.log(instanceParamInfo, instanceClassInfo.greet());
