class Stack {
  constructor() {
    this.items = []; 
  }

  push(element) {
    this.items.push(element);
  }
 
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty"; 
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty"; 
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();
console.log(stack.pop())
stack.push(10);
stack.push(20); 
stack.push(30); 
console.log(stack.peek());
console.log(stack.pop());  
console.log(stack.size()); 
console.log(stack.isEmpty());
stack.print();