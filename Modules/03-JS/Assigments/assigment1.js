//JS Assigment 1
//Calculate the sum of all numbers
/*Given an array of integers, find the sum of all integwrs.You can be assure that
the array will only contain integers(both positive and negative).
*/

function sum(numbersArray) {   
    let num = 0;
    for ( let i = 0; i < numbersArray.length; i++) {
       num += numbersArray[i];
    }
    return num
}
console.log(sum([1, 2, 3, 4]));
console.log(sum([-3, 5, 19, -6]));