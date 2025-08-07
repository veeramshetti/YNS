const personPrototype = {
  introduce: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

function createPersonWithPrototype(name, age) {
  const person = Object.create(personPrototype);
  person.name = name;
  person.age = age;
  return person;
}


const person3 = createPersonWithPrototype("Charlie", 40);
const person4 = createPersonWithPrototype("David", 35);

person3.introduce(); 
person4.introduce();