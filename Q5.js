
// Using a for loop output the elements in the reverse order 

let arr = [43, "what", 9, true , "cannot" , "false" , "be", 3, true];
let reversedArray = [];

for(let i = arr.length - 1; i >= 0; i--){
    reversedArray.push(arr[i])
     
}
console.log(reversedArray);
