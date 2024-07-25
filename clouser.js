function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
let cot = createCounter();
console.log(cot());
console.log(cot());
console.log(cot());
// console.log(cot());
// console.log(createCounter());
// console.log(createCounter());
// console.log(createCounter());
