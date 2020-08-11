import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let operationResult = Big(0);
  let leftAssignment; let
    rightAssigment;
  leftAssignment = Big(numberOne);
  rightAssigment = numberTwo ? rightAssigment = Big(numberTwo) : null;

  switch (operation) {
    case '+':
      operationResult = leftAssignment.plus(rightAssigment);
      break;
    case '-':
      operationResult = leftAssignment.minus(rightAssigment);
      break;

    case '%':
      operationResult = (leftAssignment * 0.01);
      break;
    case 'X':
      operationResult = leftAssignment.times(rightAssigment);
      break;
    case '÷':
      if (numberOne === 0 || numberTwo === 0) return 'cannot divide by zero';
      operationResult = leftAssignment.div(rightAssigment);
      break;
    default:
  }
  return operationResult.toString();
}
