import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let operationResult = Big(0);
  const regex = /^-{1}$/g;
  if (regex.test(numberOne) || regex.test(numberTwo)) return;
  const leftAssignment = Big(Number(numberOne));
  let rightAssigment;
  rightAssigment = numberTwo ? (rightAssigment = Big(numberTwo)) : null;

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
  // eslint-disable-next-line consistent-return
  return operationResult ? operationResult.toString() : 'Undefined';
}
