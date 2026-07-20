type UserD = {
    id: string;
    name: string;
    email?: string,
    phone?: number
}

function userPropD<T, K extends keyof T>(param: T, param2: K): T[K]{
    return param[param2]
}

const uND: UserD = {
    id:"2",
    name: "1",
}

console.log(userPropD(uND, "name"))

//editing 

function setUserPropD<T, K extends keyof T>(param1: T,param2: K, param3: T[K]):void{
    param1[param2] = param3
}

setUserPropD(uND, "name", 'john')