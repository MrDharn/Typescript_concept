
function id<T>(x: T){
    return x
}

const xyz = id(5)

console.log( xyz+ 1)

function wrap<T>(value: T): {value: T}{
    return {value}
}

