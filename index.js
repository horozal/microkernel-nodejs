const Core = require("./packages/core/index.js");
const Module = require("./packages/modules/module/module.js");

class Microkernel {
  constructor() {
    this.core = new Core();
    this.module = new Module();
  }

  sayHello() {
    return "Hello, World!";
  }

  sayHelloKernel() {
    return this.core.helloKernel();
  }

  sayHelloModule() {
    return this.module.helloModule();
  }
}

// Usage
const microkernel = new Microkernel();
console.log(microkernel.sayHello());
console.log(microkernel.sayHelloKernel());
console.log(microkernel.sayHelloModule());


