"use strict";
class UserN15 {
    id;
    name;
    email;
    createdAt = new Date(); //init at declaration
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        if (email)
            this.email = email;
    }
}
const userN15 = new UserN15("1", "dharn", "example@gmail.com");
