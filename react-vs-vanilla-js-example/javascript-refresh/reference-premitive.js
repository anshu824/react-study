const person = {
    name : "Anshu"
}

const secondPerson = person;//refer to same pointer

const thirdPerson = {...person};//refer to seperate copy

person.name='sweety';

console.log(secondPerson);
console.log(thirdPerson);