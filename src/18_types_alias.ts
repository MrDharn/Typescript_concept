//object shapes -> similar to interfaces
//union types ( A | B)
//intersection ( A & B)

type CarYear = number;
type CarModel = string;
type Car = {
    carYear: CarYear;
    carModel: CarModel
}

const caryear: CarYear = 2001
const carmodel: CarModel  = 'toyota'
const car:Car = {
    carYear: caryear,
    carModel: carmodel
}

type person1 = {
    id: string,
    name: string
}

const user13:person1 = {id: '2', name: "dharn"} 