"use strict";
function lenN4(xN4) {
    if (xN4.tags !== undefined) {
        return xN4.length + xN4.tags;
    }
    return xN4.length;
}
console.log(lenN4('hello'));
console.log(lenN4([1, 2, 3, 4]));
console.log(lenN4({ length: 50, tags: 40 }));
function userN6Extract(arrN4, keyN4) {
    return arrN4.map(item => item[keyN4]);
}
const usersN6 = [
    { id: "1", name: "dharn", age: 40 },
    { id: "2", name: "Marvy" }
];
console.log(userN6Extract(usersN6, "id"));
const movies = [
    { title: "Inception", rating: 9 },
    { title: "Interstellar", rating: 8 },
    { title: "Dunkirk", rating: 7 }
];
function averageRating(movies) {
    // let average;
    let sum = 0;
    for (const movie of movies) {
        sum += movie.rating;
    }
    return sum / arr.length;
}
averageRating(movies);
