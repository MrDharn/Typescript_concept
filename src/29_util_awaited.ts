 const promise: Promise<string> = Promise.resolve("dharn")
 const promise2: Promise<number> = Promise.resolve(200)


 type StringResult = Awaited<Promise<string>>

 type NumberResult = Awaited<Promise<number>>

 type NestedResult = Awaited<Promise<Promise<string>>>

 async function fetchUser(){
    return {
        id: 1,
        name: "Daniel"
    }
 }

 type User111 = Awaited<ReturnType<typeof fetchUser>>

async function getData(){
    return Promise.all([
        Promise.resolve(1 as const),
        Promise.resolve("x" as const)
    ] as const)
}

type DataReturn = Awaited<ReturnType<typeof getData>>
 
const newData: DataReturn = [1, "x"]

const user111: User111 = {id:1, name: "Daniel"}
const user112: User111 = {id:10, name: "Bull"}