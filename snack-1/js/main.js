console.log("it works");


const firstNumber = Number(prompt("Insert first number:"));


const secondNumber = Number(prompt("Insert second number:"));


if (firstNumber > secondNumber) {
    console.log("User 1 it's first ",firstNumber)
  
} else if ( secondNumber > firstNumber) {
    console.log("User 1 it's first " ,secondNumber);
    
} else {
    console.log("The same number ",firstNumber,secondNumber)
}