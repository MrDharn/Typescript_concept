//using not all the attr in my type alias

type AdddressN8 = {
    line: string,
    city: string
}

type UserDetails = {
    id: string,
    name: string,
    email?: string,
    address: AdddressN8
}

type UserPatch = Partial<UserDetails>

const patch10: UserPatch = {name: "dharn"}
const patch11: UserPatch = {address: {line: "wesco", city: "akure"}}
// const patch12: UserPatch = {lastName: "dharn"}


type UserRequired = Required<UserDetails>

const userRequired1: UserRequired = {
    id: "n",
    name: "Dhanr",
    email: "dhanr",
    address: {line: "lane", city: "c"}

}

type ReadonlyUserDetails = Readonly<UserDetails>

const readonlyUser: ReadonlyUserDetails = {
    id: "n",
    name: "Dhanr",
    email: "dhanr",
    address: {line: "lane", city: "c"}

}

//Pick in order to pick some keys

type PickSomeUserDetails = Pick<UserDetails, "name" | "id">

const pickSomeDetails: PickSomeUserDetails = {
    name: "da",
    id: "2"
}

//Omit some user details

type OmitSomeDetails = Omit<UserDetails, "name" | "id">

const omitSomeDetails: OmitSomeDetails = {
    email: "dhanr",
    address: {line:"now", city:"c"}
}


//record keys and values

type RecordRoles = "admin" | "user" | "editor"

type RoleCheck = Record<RecordRoles, UserDetails>

const dirN1: RoleCheck = {
    admin: {
        id: "n",
    name: "Admin",
    email: "a",
    address: {line: "lane", city: "c"}

    },
    user: {
        id: "n",
    name: "user",
    email: "u",
    address: {line: "lane", city: "c"}

    },
    editor: {
        id: "n",
    name: "editor",
    email: "e",
    address: {line: "lane", city: "c"}
 
    }
}