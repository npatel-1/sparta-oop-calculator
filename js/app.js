//wait for everything to load before code runs
document.addEventListener('DOMContentLoaded', () => {

// use const for everything accept in loops
//setting up initial calculator object
const calc = {};

// setting up my 'variables' aka properties to be used in calculations
calc.num1 = null;
calc.num2 = null;
calc.continue = true;
calc.nextCalc = true;
calc.operator = '';

//initial prompt
calc.alert1 = () => {
  alert('Welcome to the calculator, what would you like to do?');
}
calc.pickCalc = () => {
    calc.type = prompt('Would you like to (a)ddvanced or (b)asic calculator?');
}

calc.getOperator = () => {
  calc.operator = prompt('Would you like to (a)dd, (s)ubtract, (m)ultiply or (d)ivide');
}
calc.getAdvOperator = () => {
  calc.operator = prompt('Would you like to (p)ower or s(q)uareroot?');
}

calc.getNum1 = () => {
  calc.num1 = prompt('Please enter a first number');
  calc.num1 = Number(calc.num1);
}
calc.getNum2 = () => {
  calc.num2 = prompt('Please enter a second number');
  calc.num2 = Number(calc.num2);
}


// i want to be able to get the result when i want so i can wrap my switch statement inside a method that takes in the num1, num2 and operator arguments.
calc.getResult = (num1,num2, operator) => {
  switch (operator) {
    case 'a':
      calc.currentResult = num1 + num2;
      //displays what has been added
      alert(`${num1} + ${num2} = ${calc.currentResult}`);
      break;
    default:

    case 's':
      calc.currentResult = num1 - num2;
      alert(`${num1} - ${num2} = ${calc.currentResult}`);
      break;

    case 'm':
      calc.currentResult = num1 * num2;
      alert(`${num1} x ${num2} = ${calc.currentResult}`);
      break;

    case 'd':
      calc.currentResult = num1 / num2;
      alert(`${num1} ÷ ${num2} = ${calc.currentResult}`);
      break;
    case 'p':
      calc.currentResult = num1 ** num2;
      alert(`${num1} to the power of ${num2} = ${calc.currentResult}`);
      break;
    case 'q':
      calc.currentResult = Math.sqrt(num1);
      alert(`${num1} the squareroot of ${num1} = ${calc.currentResult}`);
      break;

  }
};

// this allows you to either end the calculations or carry on
calc.continuePrompt = () => {
  calc.continueWord = prompt('Would you like to continue? y / n');
}

calc.nextCalculation = () => {
  calc.nextCalculationWord = prompt('Would you like to continue with another calculations')
}

// while loop makes it go to the start as long boolean is true
while (calc.continue) {
  calc.alert1();
  calc.pickCalc();

  switch (calc.type) {
    case 'b':
      calc.getOperator();
      calc.getNum1();
      calc.getNum2();
      calc.getResult(calc.num1, calc.num2, calc.operator);
      calc.nextCalculation();
      if (calc.nextCalculationWord === 'y') {
        calc.num1 = calc.currentResult;
        calc.getNum2();
        calc.getResult(calc.num1, calc.num2, calc.operator);
      } else {
        calc.continuePrompt();
        (calc.continueWord === 'y') ? null : calc.continue = false;
      }
      break;
    case 'a':
      calc.getAdvOperator();
      // power or squareroot
      if (calc.operator === 'p') {
        calc.getNum1();
        calc.getNum2();
        calc.getResult(calc.num1, calc.num2, calc.operator);
        calc.continuePrompt();
        (calc.continueWord === 'y') ? null : calc.continue = false;
      } else if (calc.operator === 'q')
        calc.getNum1();
        calc.getResult(calc.num1, calc.num2, calc.operator);
        calc.continuePrompt();
        (calc.continueWord === 'y') ? null : calc.continue = false;

      break;
    default:

  }
}



console.log(calc);

}); //closing document.addEventListener()
