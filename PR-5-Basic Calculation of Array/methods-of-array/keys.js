// keys

let item1 = [1,2,3,4];
let item2 = [5,6,7,8];

let newItems = [...item1,...item2,9,10]

let obj = newItems.keys();
for(let val of obj)
{
    console.log(val);
}