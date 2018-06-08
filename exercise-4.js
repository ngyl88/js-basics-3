// 1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
//    `'sahil'` and log it to the console
const names = [
    "david",
    "gordon",
    "sahil",
];
console.log(names);
console.log(names.toString());


// 2. Log the value of the third element in `names` to the console
console.log(names[2]);

// 3. Log the value of the `names` array's `length` property to the console
console.log(names.length);

// 4. Set the value of the `length` property to `1`
names.length = 1;

// 6. Once again, log the value of the `names` array's `length` property to the
//    console. Did it change?
console.log('6. names.length after setting it to 1: ', names.length);
console.log(names);
console.log(names[1]);

// names.length = 2;
// console.log(names);
// console.log(names[1]);


// 7. Log the entire `names` array to the console again
console.log('7.', names.toString());

// 8. Add a few more elements to the array using `push`
names.push("mayuri");
names.push("yuhan");
names.push("zakaria");

names.push("min zhuang", "yulian", "derrick");
console.log('8.', names.toString());

// 9. Log the last element of the array to the console
console.log('9. last element:', names[names.length-1]);

// 10. Log the second last element of the array to the console
console.log('10. second last element:', names[names.length-2]);


// 11. Change the `textContent` property of the _second_ `p` tag on the page to
//    `"JavaScript was here!"`
document.querySelectorAll('p')[1].textContent = "Javascript was here!";

// 12. Convert the `names` array to a string, with each element separated by a
//    '<br>'. Store it in a new variable called `namesString` e.g. if `names` is
//    `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`
const namesString = names.join('<br>');
console.log('12.', namesString);

// 13. Change the `innerHTML` property of the _first_ `p` tag on the page to
//    `namesString`. What happens when you use `textContent` instead of
//    `innerHTML`?
document.querySelector('p').innerHTML = namesString;
//document.querySelector('p').textContent = namesString;

