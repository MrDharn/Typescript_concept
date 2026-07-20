function returnTypeOfFunc(id:string, isExtraInfo = false){
    return {id, name: "dharn", 
        logData: isExtraInfo ? "details": (undefined as string | undefined)
    }
}

type CheckingFunReturnType = ReturnType<typeof returnTypeOfFunc>
type CheckingParamInfo = Parameters<typeof returnTypeOfFunc>

const paramsInfo: CheckingParamInfo = ["id 2", true]
const resultInfo: CheckingFunReturnType = returnTypeOfFunc(...paramsInfo)


console.log(paramsInfo, resultInfo)

class PersonN1{
    constructor(public name:string, public age: number){}
    greet(){
        return `Yo , ${this.name} is here`
    }
}

type CheckingForInstance = InstanceType<typeof PersonN1> 
type CheckingForInstanceParams = ConstructorParameters<typeof PersonN1> 

const instanceParamInfo: CheckingForInstanceParams = ["dharn", 100]
const instanceClassInfo: CheckingForInstance = new PersonN1(...instanceParamInfo)

console.log(instanceParamInfo, instanceClassInfo)