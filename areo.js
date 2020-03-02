//function doubleIt(num) {
//    return num*2;    
//}

// const doubleIt = function myFunc(num){
//     return num*2;
// }

const doubleIt = num => num*2;
const add = (x, y) => x+y;
const give5 = () => 5;
const myfun = (x, y) =>  {
    const sum = x+y;
    const dif = x-y;
    const res = sum*dif;
    return res;
}

console.log(give5())
const result = doubleIt(5);
console.log(result);
console.log(add(4,5));
console.log(myfun(4,5));