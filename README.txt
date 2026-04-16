
PVZ PORTAL — ПОЛНАЯ ВЕРСИЯ

Что где менять:

1. Пароль
Файл: /assets/js/auth.js
Строка:
const PORTAL_PASSWORD = '12345';

2. Ссылки на внешние дашборды / формы / отчеты
Откройте нужную HTML-страницу и найдите комментарий:
<!-- LINK: вставьте ссылку на внешний дашборд / форму / отчёт -->

Например:
- /employee/open-shift.html
- /employee/timesheet.html
- /manager/open-shift.html
- /manager/timesheet.html
- /manager/procurement.html
- /manager/inventory.html
- /manager/checklists.html
- /manager/daily-reports.html
- /manager/payroll.html
- /hr/staff-registry.html
- /hr/inventory.html

3. Где менять карточки
На каждой навигационной странице карточки находятся в блоке:
<!-- MAIN ACTIONS / CARDS -->

4. Где менять заголовок и описание
На каждой странице:
<!-- PAGE TITLE -->
и текст внутри hero-блока

5. Общие стили
- /assets/css/style.css — основной стиль
- /assets/css/pages.css — дополнительные точечные правки

Важно:
Это статический HTML/CSS/JS портал.
Можно открыть локально или загрузить на обычный хостинг без сборки.


=============================
НОВЫЕ УНИВЕРСАЛЬНЫЕ ШАБЛОНЫ v6
=============================

1. Компактные разводящие страницы
- Верхняя часть навигационных страниц сделана компактнее.
- Это касается главной и страниц-разделов с карточками.

2. Шаблон страницы с Google preview
- Файлы:
  employee/_template-google-preview.html
  manager/_template-google-preview.html
  hr/_template-google-preview.html
- Как использовать:
  1) скопировать файл в нужной папке
  2) переименовать
  3) поменять title, h1, хлебные крошки
  4) вставить ссылку preview/embed в iframe
  5) вставить обычную ссылку в кнопку "Открыть отдельно"

3. Шаблон страницы с HTML-дашбордом
- Файлы:
  employee/_template-dashboard-preview.html
  manager/_template-dashboard-preview.html
  hr/_template-dashboard-preview.html
- Как использовать:
  1) скопировать файл в нужной папке
  2) переименовать
  3) поменять title, h1, хлебные крошки
  4) вставить код дашборда в переменную DASHBOARD_HTML
  5) сохранить — дашборд сразу откроется на странице

4. Примеры уже переделанных страниц
- employee/open-shift.html
- employee/timesheet.html
- manager/open-shift.html

5. Важное замечание по Google preview
- Лучше вставлять не обычную share-ссылку, а ссылку именно для preview/embed.
- Если сервис не разрешит встраивание, останется кнопка открытия в новой вкладке.
