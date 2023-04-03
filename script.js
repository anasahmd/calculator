const topDisplay = document.getElementById('td');
const botDisplay = document.getElementById('bd');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById('equal');

let num1 = '';
let num2 = '';
let op = '';
let opText = '';

for (let digit of digits) {
  digit.addEventListener('click', () => {
    num2 += digit.dataset.value;
    botDisplay.innerText = num2;
  });
}

equal.addEventListener('click', () => {
  if (!num2) return;
  console.log(op, Number(num1), Number(num2));
  console.log(operate(add, 5, 6));
  const result = operate(op, Number(num1), Number(num2));
  topDisplay.innerText = `${num1} ${opText} ${num2} =`;
  botDisplay.innerText = Math.round((result + Number.EPSILON) * 1000) / 1000;
});

for (let operator of operators) {
  operator.addEventListener('click', () => {
    op = operator.dataset.val;
    opText = operator.innerText;
    if (num1 && !num2) {
      return;
    }
    num1 = num2;
    num2 = '';
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
  if (op == 'sum') return add(num1, num2);
  if (op == 'sub') return sub(num1, num2);
  if (op == 'div') return div(num1, num2);
  if (op == 'mul') return mul(num1, num2);
};
