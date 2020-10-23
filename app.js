const firstName = 'Ardi';
const statesInUsa = 50;

function sum(num1, num2) {
  return num1 + num2;
}

const result = sum(5, 4);
// console.log(result);

function sayHello() {
  alert('Hello World');
}

// sayHello();

function checkAge(name, age) {
  age < 21
    ? console.log(`Sorry ${name}, you aren't old enough to view this page`)
    : console.log(`${name}, you're ok!`);
}

// checkAge('Charles', 21);
// checkAge('Abby', 27);
// checkAge('Jamese', 18);
// checkAge('John', 17);

const favVeggies = ['spinach', 'zucchini', 'rucola', 'melanzani'];

favVeggies.forEach((veggie) => {
  console.log(veggie);
});

const pet = {
  name: 'Morty',
  breed: 'sphynx',
};

console.log(Object.keys(pet));
console.log(`${pet.name} is a ${pet.breed}`);

const peoples = [
  { name: 'luca', age: 21 },
  { name: 'marta', age: 25 },
  { name: 'giovanni', age: 17 },
  { name: 'sara', age: 15 },
  { name: 'ared', age: 30 },
];

for (let i = 0; i < peoples.length; i++) {
  checkAge(peoples[i].name, peoples[i].age);
}

peoples.forEach((person) => {
  checkAge(person.name, person.age);
});

function getLength(word) {
  return word.length;
}
console.log(getLength('Hello World!'));

let wordLength = getLength('hello world!');
console.log(
  wordLength % 2 === 0
    ? `the world is nice and even!`
    : `the world is an odd place`
);
