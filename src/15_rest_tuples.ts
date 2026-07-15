//using reduce
function useReducer(...arr: number[]):number{
    return arr.reduce((s, n)=> s +n, 0)
}

console.log(useReducer(1,2,3,5,6,78,9,9,8,7,4))

function area (x:number, y:number):number{
    return x*y
}

const point = [10, 20];

console.log(useReducer(...point))


const points: [number,number] = [10, 20];
console.log(area(...points))

// Or

const fixedPoint = [10, 20] as const
console.log(area(...fixedPoint))