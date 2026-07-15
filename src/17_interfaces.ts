
interface User1{
    id:string;
    name:string;
    email?:string;
    readonly createdAt: Date;
}

const user11:User1 = {
    id: "1", name:"dharn", createdAt: new Date()
}

//extended version

interface User122 extends User1{
    permission: string[]
}

const user122 : User122 = {
    id: "1", name:"dharn", createdAt: new Date(), permission: ["user"]
}


interface User144 extends User122 {
    metadata:{
        meta: string
    }
}

const user144 : User144 = {
    id: "1", name:"dharn", createdAt: new Date(), permission:['admin'], metadata:{meta:"www.online.com"}
}

interface User410 extends User122, User144{}

const user410: User410 = {
    id: "1", name:"dharn", createdAt: new Date(), permission: ['user'], metadata:{meta:"sowrdsssss"}
}
