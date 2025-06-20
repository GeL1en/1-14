// =====================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// =====================

// Вывод сообщений в блок на странице
function logToPage(message) {
  const output = document.getElementById("js-output");
  if (output) {
    output.innerHTML += `<div>${message}</div>`;
  }
}

// =====================
// 1. ПРИМЕРЫ ОПЕРАТОРОВ JS
// =====================

function runLogicExamples() {
  const output = document.getElementById("js-output");
  if (output) output.innerHTML = ""; // очистка

  // if / else if / else
  const hour = new Date().getHours();
  if (hour < 12) {
    logToPage("Доброе утро!");
  } else if (hour < 18) {
    logToPage("Добрый день!");
  } else {
    logToPage("Добрый вечер!");
  }

  // switch
  const day = new Date().getDay();
  switch (day) {
    case 0:
      logToPage("Сегодня воскресенье");
      break;
    case 1:
      logToPage("Сегодня понедельник");
      break;
    default:
      logToPage("Сегодня будний день");
      break;
  }

  // for с continue
  for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // пропускаем 2
    logToPage(`for: ${i}`);
  }

  // while
  let i = 0;
  while (i < 3) {
    logToPage(`while: ${i}`);
    i++;
  }

  // do..while
  let j = 0;
  do {
    logToPage(`do..while: ${j}`);
    j++;
  } while (j < 2);

  // break
  for (let k = 0; k < 10; k++) {
    if (k === 4) {
      logToPage(`Остановлено на k = ${k}`);
      break;
    }
    logToPage(`до break: ${k}`);
  }

  // return
  function isEven(n) {
    if (n % 2 === 0) return true;
    return false;
  }
  logToPage(`Число 8 чётное? ${isEven(8) ? "Да" : "Нет"}`);
}

// =====================
// 2. ДИАЛОГОВЫЕ ОКНА
// =====================

function runDialogs() {
  alert("Пример окна alert");

  const agree = confirm("Вы согласны продолжить?");
  if (agree) {
    const name = prompt("Введите ваше имя:");
    if (name) {
      alert(`Привет, ${name}!`);
    } else {
      alert("Имя не введено.");
    }
  } else {
    alert("Вы отказались.");
  }
}

// =====================
// 3. Обработчик события через атрибут
// =====================

function sayHello() {
  alert("Привет из функции sayHello()!");
}

// =====================
// 4. Программное выполнение JS
// =====================

setTimeout(() => {
  alert("Привет из setTimeout через 2 секунды");
}, 2000);

function showCalc() {
  const x = parseFloat(document.getElementById("x-input").value);
  const y = calculateY(x);
  document.getElementById("calc-result").textContent = "Результат: " + y;
}

function calculateY(x) {
  const denominator = x * x + 3 * x + 2;
  if (denominator === 0) {
    alert("Ошибка: деление на 0");
    return "Ошибка";
  }
  if (isNaN(denominator)) {
    alert("Ошибка: корень из отрицательного числа");
    return "Ошибка";
  }
  return (x + 1) / denominator;
}

function workWithStrings() {
  const S1 = "Я люблю Беларусь";
  const S2 = "Я учусь в Политехническом колледже";

  const length = S1.length;
  const n = 15;
  const char = S1.charAt((n - 1) % S1.length);
  const code = char.charCodeAt(0);
  const S2new = S2.replace(/е/g, "@");

  document.getElementById("string-result").innerHTML = `
    <p>Строка S1: ${S1}</p>
    <p>Длина S1: ${length}</p>
    <p>Символ под номером ${n}: ${char}</p>
    <p>ASCII-код символа: ${code}</p>
    <p>Изменённая S2: ${S2new}</p>
  `;
}

function validateRegistrationForm(event) {
  event.preventDefault();

  const email = document.getElementById("email");
  const login = document.getElementById("login");
  const password = document.getElementById("password");
  const captcha = document.getElementById("captcha");

  const allowedDomains = ["@gmail.com", "@yandex.ru", "@mail.ru", "@outlook.com", "@icloud.com"];
  let valid = true;

  [email, login, password, captcha].forEach(input => input.style.border = "");

  // Email проверка
  const emailValue = email.value.trim();
  if (!allowedDomains.some(domain => emailValue.endsWith(domain))) {
    email.style.border = "2px solid red";
    showEmailErrorModal(); // Показываем окно
    valid = false;
  }

  // Логин
  const loginPattern = /^[a-zA-Z0-9_-]{3,15}$/;
  if (!loginPattern.test(login.value)) {
    login.style.border = "2px solid red";
    valid = false;
  }

  // Пароль
  if (password.value.length < 6 || password.value.length > 24) {
    password.style.border = "2px solid red";
    valid = false;
  }

  // Капча
  if (captcha.value.trim() === "") {
    captcha.style.border = "2px solid red";
    valid = false;
  }

  if (!valid) {
    return false;
  }

  alert("Регистрация прошла успешно!");
  return true;
}

// Показ модального окна при неправильном email
function showEmailErrorModal() {
  document.getElementById("email-modal").style.display = "flex";
}

// Закрытие окна
function closeEmailModal() {
  document.getElementById("email-modal").style.display = "none";
}
