
function printId(id: string | number){
    if(typeof id === 'string'){
        id.toUpperCase()
    }else{
        id.toFixed(2)
    }

    console.log(id)
}

//Object union

type Admin = {role: "Admin", permissions: string[]}
type Customer = {role: "Customer", loyaltyPoints: number}

function describeUser(u: Admin | Customer){

    if(u.role === "Admin"){
        console.log(u.permissions)
    }else{
        console.log(u.loyaltyPoints)
    }
}

function describeUserWithInOperator(u: Admin | Customer){
    if("permissions" in u){
        console.log(u.role)
    }else{ 
        console.log(u.loyaltyPoints)
    }
}

//array of unions and unions of array

const arrOfUnion: (string | number)[] = ["a",1, "b", 5]

const unionOfArray: string[] | number[] = Math.random() > 0.1 ? ["x", "3"]: [1, 2]
 
// unionOfArray.push("2")