const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware для обслуживания статических файлов из папки 'landing/public'
app.use(express.static(path.join(__dirname, "landing", "public")));

// Middleware для обслуживания статических файлов из папки 'landing/assets'
app.use("/assets", express.static(path.join(__dirname, "landing", "assets")));

// Middleware для парсинга JSON-запросов
app.use(express.json());

// Маршруты для страниц (обратите внимание, что мы указываем путь относительно папки 'landing/public')
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "landing", "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "landing", "public", "index.html"));
});

app.get("/shelf", (req, res) => {
  res.sendFile(path.join(__dirname, "landing", "public", "shelf.html"));
});

app.get("/work", (req, res) => {
  res.sendFile(path.join(__dirname, "landing", "public", "work.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "landing", "public", "index.html"));
});

// Маршрут для обработки формы обратной связи
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Получено сообщение от ${name} (${email}): ${message}`);
  res.send("Сообщение отправлено!");
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
