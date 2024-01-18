/* 1  */
const person = {
    name: "Adam",
    age: 99,
    city: "Stockholm"
}
console.log(person);


/* 2 */
for (const key in person) {
    console.log(person[key]);
}


/* 3 */
person.age = 18;
person.email = 'a@example.com';

console.log(person);


/* 4 */
const car = {
    make: "Saab",
    model: "9000",
    getDetails: function() {
        return `${this.make} ${this.model}`;
    }
};
console.log(car.getDetails());


/* 5 */
for (const key in person) {
    console.log('- ' + person[key]);
}


/* 6 */
const student = {
    subjects: {

    }
}
/* 7 */


/* 8 */
const books = [
    {
        title: 'Doomsday',
        author: 'Nisse Hult'
    },
    {
        title: 'Home gardening',
        author: 'Holger Nilsson'
    }
];
console.log(books);


/* 9 */
for (const b in books) {
    // let b = books[book];
    // console.log(b.title + ' by ' + b.author);
    console.log(books[b].title + ', ' + books[b].author);
}

