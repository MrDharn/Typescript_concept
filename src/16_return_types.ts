//return by inference

function sum(x:number, y:number){
    return x+y
}


//export

export function stringInference(s:string):string{
    return `Hello ${s}`
}

//Boolean to Number

function booleanToNumber(x: boolean): number{
    if(x){
        return 1
    } else{
        return 0
    }
}

//async return

async function nameIt() {
        return 42
}

nameIt().then((n)=> console.log(n))