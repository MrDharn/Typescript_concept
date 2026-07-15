type inter1 = {id: string;}
type inter2 = {createdAt: Date}
type intersection = inter1 & inter2

const e: intersection = {id: "1", createdAt: new Date()}
console.log(e)

//Assignment
type type1 = {username: string};
type type2 = {email: string};

type type3 = type1 & type2
const userDetails:type3 = {username: "Into ", email:"dharn247@gmai"};

//the type must not contain same attributes
type NumberOfHolderUnique = {a: string};
type StringOfHolderUnique = {a: number};

type valueMix = NumberOfHolderUnique & StringOfHolderUnique
// const value: valueMix  = {a: 32}


