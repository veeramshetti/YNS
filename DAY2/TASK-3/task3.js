const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isStudent: false,
  greet: function() {
    console.log(`Hello, my name is ${this.firstName}.`);
  }
};

console.log(person.firstName); 
person.greet(); 
