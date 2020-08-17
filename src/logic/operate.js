import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let operationResult = Big(0);
  const leftAssignment = Big(Number(numberOne));
  let rightAssigment;
  rightAssigment = numberTwo ? (rightAssigment = Big(numberTwo)) : 1;

  switch (operation) {
    case '+':
      operationResult = leftAssignment.plus(rightAssigment);
      break;
    case '-':
      operationResult = leftAssignment.minus(rightAssigment);
      break;

    case '%':
      operationResult = leftAssignment * 0.01;
      break;
    case 'x':
      operationResult = leftAssignment.times(rightAssigment);
      break;
    case '÷':
      try {
        operationResult = leftAssignment.div(rightAssigment);
      } catch (e) {
        operationResult = null;
      }
      break;
    default:
  }
  return operationResult
    ? operationResult.toString()
    : 'Undefined';
}
