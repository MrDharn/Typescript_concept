type Inexample1 = {role: "Admin", permissions: string[]}
type Inexample2 = {role: "User", createdAt: Date}

type UserExample = Inexample1 | Inexample2;

function describeUserExample(u: UserExample){
    if("permissions" in u){
        return `This is Admin ${u.role}`
    }

    return `User ${u.createdAt.toISOString()}`
}

console.log(describeUserExample({role: "Admin", permissions: ['walking']}))




//chaining 

type ProfileN3 = {
    name: string, 
    contact?: {email: string}
}

const P1N3: ProfileN3 = {name: "dharn"}
const P1N2: ProfileN3 = {name: "steve", contact:{email: "dharn@example"}}

P1N2.contact?.email

const countFromServer: number | null | boolean | string  = 50

// const aN3 = countFromServer ? countFromServer : 100
const aN4 =  countFromServer?? 100 //checks only null and undefined

const aN5 = countFromServer || 100 //this checks for only 


console.log(aN5, aN4)