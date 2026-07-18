
function checkTypes(x: unknown){
    if(Array.isArray(x)){
        return true
    }
    if(x instanceof Date){
        return x
    }
    
    if(x instanceof Error){
        return ("hilarious")
    }
    if(typeof x === 'object'){
        return "object"
    }

}


console.log(
    checkTypes([1,2,3]),
    checkTypes(new Date()),
    checkTypes(new Error('opps! Error Occured')),
    checkTypes({x: 1})
)

function describeType(x: unknown){
    if(typeof x === 'string'){
        return "string"
    }
    if(typeof x === "number"){
        return "number"
    }
    if(typeof x === 'object'){
        return "objects"
    }
    if(typeof x === 'function'){
        return "function"
    }
    if(typeof x === 'symbol'){
        return 'symbol'
    }
    if(typeof x === 'bigint'){
        return "biginit"
    }
    if(typeof x === 'boolean'){
        return "boolean"
    }
}

console.log(describeType("dharn"),
describeType(40),
describeType(()=> {}),
describeType(Symbol),
describeType(true),
describeType("dharn"),
describeType(undefined),
describeType({dharn: "yeah"})
)