const display = document.getElementById('display');
const digits = document.querySelectorAll('.digit');

let num1 = 0;
let num2 = 0;
let operator;

for (let digit of digits) {
  digit.addEventListener('click', () => {});
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
  if (op == '+') return add(num1, num2);
  if (op == '-') return sub(num1, num2);
  if (op == '/') return div(num1, num2);
  if (op == '*') return mul(num1, num2);
};
