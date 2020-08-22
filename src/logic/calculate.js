import operate from './operate';

export default function calculate(calcObj, btnName) {
  const { total, next, operation } = calcObj;

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operands = ['+', '-', '÷', 'x'];

  if (btnName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (btnName === '0' && !total && !next) {
    return {
      total,
      next,
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

  if (btnName === '.') {
    if (!next) {
      return {
        total,
        next: '0.',
        operation,
      };
    }

    if (next && !next.includes('.')) {
      return {
        total,
        next: `${next}.`,
        operation,
      };
    }
  }

  if (btnName === '-' && !next && !total) {
    return {
      total: next,
      next: btnName,
      operation: null,
    };
  }

  if (btnName === '-' && !next && total) {
    return {
      total,
      next: btnName,
      operation,
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
      total: operate(total, next, btnName),
      next: null,
      operation: btnName,
    };
  }

  if (btnName === '=' && next && total) {
    return {
      total: operate(total, next, operation),
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
      next: operate(next, total, btnName),
      operation: null,
    };
  }

  return {
    total,
    next,
    operation,
  };
}
