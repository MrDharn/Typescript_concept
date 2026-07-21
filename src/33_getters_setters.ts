class Temperature{
    #c = 0

    constructor(celsius: number){
        this.celsius = celsius
    }

    get celsius():number{
        return this.#c
    }
    set celsius(value:number){
        if(Number.isNaN(value)) throw new  Error("This is not a Number!!")

            this.#c = value
    }

    get fahrenheit():number{
        return (this.#c * 9)/5 + 32
    }

    set fahrenheit(f:number){
        if(Number.isNaN(f)) throw new Error("this is not a number")

            this.#c = ((f - 32) * 5) / 9
    }

    get kelvin():number{
        return this.#c + 273
    }

    set kelvin(value: number){
        if(Number.isNaN(value)) throw new Error("Not a Number")

            this.#c = value - 273
    }
}


const tesTemperature = new Temperature(30)
 
// console.log(tesTemperature.celsius)

// console.log(tesTemperature.fahrenheit)


tesTemperature.kelvin = 300

console.log(tesTemperature.celsius)
console.log(tesTemperature.fahrenheit)
console.log(tesTemperature.kelvin)

class User247{
   private _name: string;
    constructor(name:string){
        this._name = name
    }
    get name(){
        return this._name
    }

    set name(value: string){
        if(value === "" || !value || value.length < 3) throw new Error("Invalid input")
            
            this._name = value
    }

}

const user247 = new User247("dharn")
console.log(user247)

console.log(user247.name)
user247.name = "Daniel"

console.log(user247.name)
// user247.name = "Daniel"