export function initApp() {
  let firstNum = '',
    secondNum = '',
    sign = '',
    end = false;

  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const operators = ['-', '+', '*', '/', '%'];

  const resultStr = document.querySelector('.calculator-screen-result');
  const str2 = document.querySelector('.calculator-screen');
  const calculatorKeys = document.querySelector('.calculator-keys');
  const toggleBtn = document.querySelector('.toggle');
  const body = document.querySelector('body');

  function clearResStr() {
    (firstNum = ''), (secondNum = ''), (sign = ''), (end = false);
    str2.value = '';
    resultStr.value = '';
  }

  function changeSign() {
    if (firstNum !== '' && secondNum === '') {
      firstNum = firstNum * -1;
      resultStr.value = firstNum;
    }
    if (firstNum !== '' && secondNum !== '') {
      secondNum = secondNum * -1;
      resultStr.value = secondNum;
    }
    if (firstNum !== '' && secondNum !== '' && end) {
      firstNum = firstNum * -1;
      resultStr.value = firstNum;
    }
  }

  toggleBtn.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    toggleBtn.classList.toggle('active');
    body.classList.toggle('theme');
  });

  calculatorKeys.addEventListener('click', (event) => {
    event.stopImmediatePropagation();

    if (event.target.classList.contains('all-clear')) {
      clearResStr();
    }
    if (event.target.classList.contains('changeSign')) {
      changeSign();
    }

    const key = event.target.value;

    if (nums.includes(key)) {
      if (firstNum !== '' && sign !== '') {
        str2.value = firstNum + ' ' + sign;
      }

      if (secondNum === '' && sign === '') {
        firstNum = firstNum + key;
        resultStr.value = firstNum;
      } else if (firstNum !== '' && secondNum !== '' && end) {
        secondNum = key;
        end = false;
        resultStr.value = secondNum;
      } else {
        secondNum = secondNum + key;
        resultStr.value = secondNum;
      }
      return;
    }

    if (operators.includes(key)) {
      sign = key;
      resultStr.value = sign;
      return;
    }

    if (key === '=') {
      str2.value = '';

      if (secondNum === '') {
        secondNum = firstNum;
      }

      switch (sign) {
        case '-':
          firstNum = +firstNum - +secondNum;
          break;
        case '+':
          firstNum = +firstNum + +secondNum;
          break;
        case '%':
          firstNum = (+firstNum / 100) * +secondNum;
          break;
        case '*':
          firstNum = +firstNum * +secondNum;
          break;
        case '/':
          if (secondNum === '0') {
            resultStr.value = 'NaN';
            firstNum = '';
            secondNum = '';
            sign = '';
            return;
          }
          firstNum = +firstNum / +secondNum;
          break;
      }
      end = true;
      resultStr.value = firstNum;
    }
  });
}
