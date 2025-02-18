class ExampleClass {
    constructor(value) {
      this.value = value;
    }
  
    arrowFunction() {
      setTimeout(() => console.log('Arrow - this.value:', this.value), 1000);
    }
  }
  
  const obj = {
    value: 50,
    regularMethod() { console.log('Regular - this.value:', this.value); },
    arrowMethod: () => console.log('Arrow - this.value:', this.value)
  };
  
  new ExampleClass(100).arrowFunction();
  obj.regularMethod();
  obj.arrowMethod();
  