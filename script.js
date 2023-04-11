const topDisplay = document.getElementById('td');
const botDisplay = document.getElementById('bd');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equal');
const reset = document.getElementById('reset');
const del = document.getElementById('del');

let num1 = '';
let num2 = '';
let op = '';
let opText = '';

for (let digit of digits) {
  digit.addEventListener('click', () => {
    if (digit.dataset.value == '.' && num2.includes('.')) {
      return;
    }
    if (num2 == 'Infinity') {
      return;
    }
    if (num2.length >= 10) {
      return;
    }
    num2 += digit.dataset.value;
    botDisplay.innerText = num2;
  });
}

equal.addEventListener('click', () => {
  if (!(num1 && num2)) return;
  const result = operate(op, Number(num1), Number(num2));
  topDisplay.innerText = `${num1} ${opText} ${num2} =`;
  num1 = '';
  op = '';
  opText = '';
  if (result > 9999999999) {
    num2 = result;
    botDisplay.innerText = result;
  } else {
    num2 = String(Math.round((result + Number.EPSILON) * 1000) / 1000);
    botDisplay.innerText = num2;
  }
});

reset.addEventListener('click', () => {
  num1 = '';
  num2 = '';
  op = '';
  opText = '';
  topDisplay.innerHTML = '';
  botDisplay.innerHTML = '';
});

del.addEventListener('click', () => {
  if (num2 == 'Infinity') {
    num2 = '';
  } else {
    num2 = num2.slice(0, -1);
  }
  botDisplay.innerText = num2;
});

for (let operator of operators) {
  operator.addEventListener('click', () => {
    // If there is no value, no operator changed
    if (!num1 && !num2) return;

    if (num2) {
      if (!num1) {
        num1 = num2;
        num2 = '';
      } else {
        let result = operate(op, Number(num1), Number(num2));
        num1 = Math.round((result + Number.EPSILON) * 1000) / 1000;
        num2 = '';
      }
    }
    op = operator.dataset.val;
    opText = operator.innerText;
    topDisplay.innerText = `${num1} ${operator.innerText} `;
    botDisplay.innerText = '';
  });
}

const add = (num1, num2) => {
  return num1 + num2;
};

const sub = (num1, num2) => {
  return num1 - num2;
};

const div = (num1, num2) => {
  return num1 / num2;
};

const mul = (num1, num2) => {
  return num1 * num2;
};

const operate = (op, num1, num2) => {
  let value = 0;
  if (op == 'sum') value = add(num1, num2);
  if (op == 'sub') value = sub(num1, num2);
  if (op == 'div') value = div(num1, num2);
  if (op == 'mul') value = mul(num1, num2);
  if (value > 9999999999) {
    return value.toExponential(4);
  }
  return value;
};
