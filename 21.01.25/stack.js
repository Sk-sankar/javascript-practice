class Stack {
    constructor() {
      this.items = []; 
    }
  
    push(element) {
      this.items.push(element);
    }


    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.items.pop();
    }
  
   
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.items[this.items.length-1 ];
    }
  
   
    isEmpty() {
      return this.items.length === 0;
    }
  

    size() {
      return this.items.length;
    }
  }
  
 
  const myStack = new Stack();
  

  myStack.push(10);
  myStack.push(20);
  myStack.push(30);
  
  console.log("Peek:", myStack.peek()); 
  

  console.log("Popped:", myStack.pop()); 
  console.log("Peek after pop:", myStack.peek()); 
  

  console.log("Stack size:", myStack.size()); 

  myStack.pop();
  myStack.pop();
  console.log("Is stack empty?", myStack.isEmpty()); 
  