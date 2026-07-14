let username:string = 'dharn'
let age:number = 50
let isActive:boolean = true

const big: bigint = 2n **63n - 1n

//Operator "+" cannot be applied to types biginit and number

//const mixed = big + age

const TOKEN: unique symbol = Symbol("TOKEN")

function yearsToDay(year:number): number{
    return year * 365
}
