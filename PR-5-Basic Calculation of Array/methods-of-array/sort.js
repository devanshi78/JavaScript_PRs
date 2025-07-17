// sort (it will sort array)

let item1 = [5,6,7,8];
let item2 = [1,2,3,4];

let newItems = [...item1,...item2,9,10]
let sortdata = newItems.sort((a,b) => a-b)

console.log(item1);
console.log(item2);

console.log(sortdata);