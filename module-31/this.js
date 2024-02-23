class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`this is ${this.name} sleeping now`);
  }
  activity() {
    this.sleep();
  }
}

const kodom = new Person("Kodom  ali", 21);
console.log(kodom);
kodom.sleep();
kodom.activity();
