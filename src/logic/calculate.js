import operate from './operate';

export default function calculate(calcObj, btnName) {
  let { total, next, operation } = calcObj;
  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  }

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operands = ['+', '-', '÷', 'x'];

  if (btnName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  if (btnName === '+/-' && !next && total) {
    return {
      total: (total * -1).toString(),
      next,
      operation,
    };
  }
  if (btnName === '+/-' && next) {
    return {
      total,
      next: (next * -1).toString(),
      operation,
    };
  }
  if (btnName === '.' && !next.includes('.') && next) {
    return {
      total,
      next: `${next}.`,
      operation,
    };
  }

  if (digits.includes(btnName)) {
    return {
      total,
      next: next ? `${next}${btnName}` : `${btnName}`,
      operation,
    };
  }

  if (btnName === '=' && next && total) {
    return {
      total: operate(total, next, operation).toString(),
      next: null,
      operation: null,
    };
  }

  if (btnName === '%' && next && total) {
    return {
      total: operate(total, next, btnName),
      next: null,
      operation,
    };
  }

  if (btnName === '%' && next && !total) {
    return {
      total: null,
      next: operate(next, total, btnName).toString(),
      operation: null,
    };
  }

  if (operands.includes(btnName) && next && !total) {
    return {
      total: next,
      next: null,
      operation: btnName,
    };
  }

  if (operands.includes(btnName) && !next && total) {
    return {
      total,
      next,
      operation: btnName,
    };
  }

  if (operands.includes(btnName) && next && total) {
    return {
      total: operate(total, next, btnName).toString(),
      next: null,
      operation: btnName,
    };
  }

  return {
    total,
    next,
    operation,
  };
}
