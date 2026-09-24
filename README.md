# Snowball Avalanche — Dialex Lab

Статический мини-лендинг для репозитория `snowball-landing` и GitHub Pages. HTML, CSS и JavaScript без сборки и зависимостей. Изображения оптимизированы в WebP. Главная страница на английском; адаптирована для телефона и компьютера. Галерея поддерживает прокрутку, стрелки, увеличение и закрытие по Escape.

## Публикация

1. Загрузить содержимое этой папки в корень репозитория `snowball-landing`.
2. В GitHub: Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
3. Custom domain: `snowball.dialex.chat` (также указан в файле `CNAME`).
4. У DNS-провайдера добавить CNAME для `snowball`, направленный на `<GITHUB_USERNAME>.github.io` (имя владельца репозитория, без пути и протокола).
5. После проверки DNS включить Enforce HTTPS в настройках Pages.

Главная: https://snowball.dialex.chat/

Политика: https://snowball.dialex.chat/privacy/

`privacy/index.html` — точная копия предоставленного файла. Сайт не подключает аналитику, внешние шрифты и cookies.

Android ID: `chat.dialex.snowball`

Google Play: https://play.google.com/store/apps/details?id=chat.dialex.snowball

Игра ещё не опубликована. Ссылка на будущую карточку Google Play уже прописана; на кнопке и в метаданных указан статус Coming soon. После выхода игры заменить COMING SOON TO на GET IT ON, обновить title кнопки и описание og:description.

## Локальный просмотр

В корне папки выполнить `python -m http.server 8080`, затем открыть http://localhost:8080/.

## Изменения

- Тексты и ссылка магазина: `index.html`.
- Оформление и адаптивность: `styles.css`.
- Галерея: `script.js`.
- Изображения: `assets/`.
- Поддержка: guadalupegamarrazz@gmail.com.
