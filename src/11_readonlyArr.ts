
const y2: readonly number[] = [1]
const yss: ReadonlyArray <number> = [1,2];
// yss.push(0)

const xss = [1, 3, 6]

function sum(nums: readonly number[]):number{
    let s = 0;
    for(const n of nums){
        s+= n
    }

    return s
}

//passing mutable array into readonly param is allowed
console.log(sum(xss))




