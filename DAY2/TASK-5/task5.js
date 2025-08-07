Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    newArray.push(result);
  }
  return newArray;
};

const numbersProto = [6, 7, 8, 9, 10];

const squaredNumbers = numbersProto.myMap(num => num * num);

console.log(squaredNumbers); 