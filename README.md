# Node.JS_server
NodeJS server for CRUD interaction with filmDB (PostgreSQL).

### Description
Сервер на Node.JS, который работает с упрощенной базой данных фильмов

#### EER diagram предполагаемой БД. 
<img src='filmDB.png' width=650>

#### Запуск сервера.
1. npm i
2. Создание базы данных ('CREATE DATABASE filmdb), создание таблиц (файл db.sql).
3. Создать файл .env
   - PORT= "порт"
   - PASSWORD_PG= "ваш пароль в postgres'
4. npm run dev
5. Проверка работы через Postman. Файл filmDB.postman_collection.json. (Порт 8080)

P.S. Добавлена возможность CRUD-взаимодействия с таблицей film_genre.
