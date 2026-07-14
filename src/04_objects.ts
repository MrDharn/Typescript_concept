
//type alias form 
type User = {
    id: string; //required
    name: string; //required
    email?: string //optional
    readonly createdAt: Date //cannot be reassigned
}

const user1: User = {id: "1", name: 'dharn', createdAt: new Date() }

//inline form 

const user2: {
    id: string;
    name: string
} = {id: "number2", name: "DHARN"}


interface Model{
    name: string;
    age: number;
    isAdmin: boolean
}

const user4: Model={name:"DHARN", age: 22, isAdmin: false}

//key and values

type Count = {[k:string]: number}

//specific set of values

type Count1 = Record<"likes"| "shares" | "goals", number>

const c2: Count1 ={likes: 1, shares: 30, goals:30}
