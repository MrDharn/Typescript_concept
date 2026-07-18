
function lenN4<T extends {length: number, tags?:number}>(xN4: T): number{
    if(xN4.tags !== undefined){
        return xN4.length + xN4.tags
    }

    return xN4.length
}

console.log(lenN4('hello'))
console.log(lenN4([1,2,3,4]))
console.log(lenN4({length: 50, tags: 40}))

type UserN6 ={id:string, name: string, age?: number}

function userN6Extract<T,K extends keyof T>(arrN4: T[], keyN4: K): Array<T[K]>{
    return arrN4.map(item => item[keyN4])
}

const usersN6: UserN6[] = [
    {id: "1", name: "dharn", age: 40},
    {id:"2", name: "Marvy"}
]

console.log(userN6Extract(usersN6, "id"))

