"use strict";
//using not all the attr in my type alias
const patch10 = { name: "dharn" };
const patch11 = { address: { line: "wesco", city: "akure" } };
const userRequired1 = {
    id: "n",
    name: "Dhanr",
    email: "dhanr",
    address: { line: "lane", city: "c" }
};
const readonlyUser = {
    id: "n",
    name: "Dhanr",
    email: "dhanr",
    address: { line: "lane", city: "c" }
};
const pickSomeDetails = {
    name: "da",
    id: "2"
};
const omitSomeDetails = {
    email: "dhanr",
    address: { line: "now", city: "c" }
};
const dirN1 = {
    admin: {
        id: "n",
        name: "Admin",
        email: "a",
        address: { line: "lane", city: "c" }
    },
    user: {
        id: "n",
        name: "user",
        email: "u",
        address: { line: "lane", city: "c" }
    },
    editor: {
        id: "n",
        name: "editor",
        email: "e",
        address: { line: "lane", city: "c" }
    }
};
