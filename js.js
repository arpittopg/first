function cal() {
    console.log("here")
let result;

// take the operator input
const operator =  document.getElementById("z").value

// take the operand input
const number1 = document.getElementById("x").value 
const number2 = document.getElementById("y").value 

switch(operator) {
    case '+':
         result = +number1 + +number2;
       
        break;

    case '-':
         result = number1 - number2;
   
        break;

    case '*':
         result = number1 * number2;

        break;

    case '/':
         result = number1 / number2;
   
        break;

    default:
        alert('Invalid operator');
        break;
}
document.getElementById("result").value = result


}