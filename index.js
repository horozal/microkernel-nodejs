const Core = require("packages/core/src/index.js");
const Module = require("packages/modules/module/module.js");

class Microkernel {
  constructor() {
    this.core = new Core();
    this.module = new Module();
  }

  sayHello() {
    return "Hello, World!";
  }
}

// Usage
const microkernel = new Microkernel();
console.log(microkernel.sayHello());
