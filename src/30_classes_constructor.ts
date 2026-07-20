class UserN15{
    id: string;
    name: string;
    email?: string;
    createdAt: Date = new Date() //init at declaration

    constructor(id:string, name:string, email?:string){
        this.id = id
        this.name = name
        if(email) this.email = email
    }
}

const userN15 = new UserN15("1", "dharn","example@gmail.com")