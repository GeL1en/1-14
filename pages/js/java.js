function initPage() {
  // Задание 2.1
setTimeout(() => {
  const title = document.title;
  alert("Заголовок документа: " + title);
}, 2000);

  // Задание 4.1 — сразу не вызываем, а по кнопке
}

function addBirthday() {
  const birthday = document.createElement("p");
  birthday.textContent = "Дата рождения: 01.01.2000";
  document.getElementById("fullname").after(birthday);
}

document.addEventListener("DOMContentLoaded", () => {
  const fullnameEl = document.getElementById("fullname");
  fullnameEl.style.cursor = "pointer"; // чтобы было видно, что элемент кликабельный
  fullnameEl.addEventListener("click", addBirthday);
});

function styleElement() {
  const el = document.getElementById("fullname");
  el.style.color = "red";
  el.style.backgroundColor = "rgb(0, 4, 255)";
  el.style.fontFamily = "Arial, sans-serif";
  el.style.border = "1px solid green";
}

// Навесим обработчик на кнопку по её id после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("style-btn");
  btn.addEventListener("click", styleElement);
});


function validateForm(event) {
  event.preventDefault(); // Остановим отправку

  const nameInput = document.getElementById("name");
  const error = document.getElementById("name-error");

  nameInput.classList.remove("error");
  error.textContent = "";

  const value = nameInput.value.trim();

  if (value === "") {
    nameInput.classList.add("error");
    error.textContent = "Поле обязательно для заполнения";
    return false;
  }

  if (!/^[А-Яа-яA-Za-z]+$/.test(value)) {
    nameInput.classList.add("error");
    error.textContent = "Недопустимые символы";
    return false;
  }

  if (value.length < 2 || value.length > 20) {
    nameInput.classList.add("error");
    error.textContent = "Длина должна быть от 2 до 20 символов";
    return false;
  }

  alert("Форма успешно отправлена!");
  return true;
}

function openBrowserInfoWindowOnce() {
  const btn = document.getElementById("btn-browser-info");
  btn.disabled = true; // Отключаем кнопку

  openBrowserInfoWindow(); // Открываем окно
}

function openBrowserInfoWindow() {
  const os = navigator.platform;
  const browser = getBrowserName();
  const language = navigator.language;

  const infoHtml = `
    <html>
      <head><title>Информация о браузере</title></head>
      <body>
        <h2>Информация о системе</h2>
        <ul>
          <li><strong>Операционная система:</strong> ${os}</li>
          <li><strong>Браузер:</strong> ${browser}</li>
          <li><strong>Язык:</strong> ${language}</li>
        </ul>
      </body>
    </html>
  `;

  const newWindow = window.open("", "_blank", "width=400,height=300");
  newWindow.document.write(infoHtml);
  newWindow.document.close();

  // Задание 4.2 — закрыть окно через 5 секунд
  setTimeout(() => {
    newWindow.close();
  }, 5000);
}

function getBrowserName() {
  const ua = navigator.userAgent;
  if (ua.includes("OPR") || ua.includes("Opera")) return "Opera";
  if (ua.includes("Edg")) return "Microsoft Edge";
  if (ua.includes("Chrome")) return "Google Chrome";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  if (ua.includes("Firefox")) return "Mozilla Firefox";
  return "Неизвестный браузер";
}
