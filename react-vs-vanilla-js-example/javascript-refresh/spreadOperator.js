const numbers = [1,2,3];
const newNumbers = [...numbers,4];
const newNumbersT = [numbers,4];

console.log(numbers);
console.log(newNumbers);
console.log(newNumbersT);

const person = {
    name : "anshu"
}

const newPerson = {
    ...person,
    age : 29
}

console.log(person);
console.log(newPerson);

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3));