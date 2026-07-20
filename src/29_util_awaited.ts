 const promise: Promise<string> = Promise.resolve("dharn")
 const promise2: Promise<number> = Promise.resolve(200)


 type StringResult = Awaited<Promise<string>>

 type NumberResult = Awaited<Promise<number>>

 type NestedResult = Awaited<Promise<Promise<string>>>

 async function fetchUser(){
    return {
        id: 1,
        name: "Daniel"
    } as const
 }

 type User111 = Awaited<ReturnType<typeof fetchUser>>

async function getData(){
    return Promise.all([
        Promise.resolve(1 as const),
        Promise.resolve("x" as const)
    ] as const)
}

type DataReturn = Awaited<ReturnType<typeof getData>>
 