function nothing(msg: string): void{
    console.log(msg)
}

function nothing2(msg: string): never{
    throw new Error(msg)
}

const valueAny:any = JSON.parse('{"X": 1}')


let value: string |undefined = undefined