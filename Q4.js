

// Get sum of two array ... actually the sum of all their elements 
// P.S each array includes only the integer numbers . Output is a number too. 

let arr_1 = [3,5,22,5,7,2,45,75,89,21,2];
let arr_2 = [9,2,42,55,71,22,4,5,90,25,26];

let arrSum_1 = 0;
let arrSum_2 = 0;


for(let i = 0; i < arr_1.length; i++){
    arrSum_1 = arrSum_1 + arr_1[i]
}
    console.log(arrSum_1);

for(let j = 0; j < arr_2.length; j++){
    arrSum_2 = arrSum_2 + arr_2[j]
}
    console.log(arrSum_2);

    let total_sum = arrSum_1 + arrSum_2

    console.log(total_sum);
