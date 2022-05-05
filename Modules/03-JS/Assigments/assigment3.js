//JS Assigment 3
//calculate the factorial of a provided integer.


//recursive
function factorial(anyNumber) {
  if (anyNumber == 0) return 1;
  else {
    return anyNumber * factorial(anyNumber - 1);
  }
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(1));


//while loop
function factorial (anyNumber) {
    let result =anyNumber;
    if (anyNumber === 0 || anyNumber ===1)
    return 1;

    while (anyNumber > 1){
        anyNumber--;
        result *= anyNumber;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(1));



//for loop
function factorial(anyNumber){
    if(anyNumber ===0 || anyNumber ===1)
        return 1;
    for (let i =anyNumber-1 ; i>=1; i--){
        anyNumber *= i;
    }
    return anyNumber;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(1));