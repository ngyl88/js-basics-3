// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ["bags", "shirts", "shoes"];


// 2. Using `forEach`, log every element of the `shoppingList` array to the console
console.log('Logging forEach with 1 argument...');
shoppingList.forEach((item) => console.log('   ',item));
console.log('Logging forEach with 2 arguments...');
shoppingList.forEach((x, y) => console.log('   ',x,y));
console.log('Logging forEach with 3 arguments...');
shoppingList.forEach((x,y,z) => console.log('   ',x,y,z));


// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)
shoppingList.forEach((item) => {
    const e = document.createElement('li');
    e.textContent = item;
    document.querySelector('ul').appendChild(e);
})

// 4. Create a new array `numbers` with a few numeric elements
const numbers = [100, 2, 30];

// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
const squareNumbers = numbers.map(function (n) {
    return n*n;
});
console.log('squareNumbers:', squareNumbers);