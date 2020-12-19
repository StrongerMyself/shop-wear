# Стиль разработки проекта

- Название компонентов и их файлов именуются PascalCase, остальные файлы kebab-case

### Файловая структура
- src - исходники приложения
- src/components - общие простые компоненты
- src/features - функциоанальность(фича) имеющая бизнес-логику
- src/features/components - компоненты определенной функциональности
- src/features/actions.ts - экшены хранилища от фичи
- src/features/epics.ts - эпики (redux-observable) от фичи
- src/features/reducer.ts - редьюсер хранилища от фичи
- src/features/selector.ts - выборки данных из хранилища для фичи
- src/routes - страницы
- src/services/... - сервисы, запросы по сети
- src/services/types.d.ts - конструктор сервисов в типы
- src/store - хранилище приложения
- src/store/root-action.ts - регистрация всех экшенов
- src/store/root-epic.ts - регистрация всех эпиков
- src/store/root-reducer.ts - регистрация всех редьюсеров
- src/store/store - конструктор хранилища
- src/store/types.d.ts - конструктор хранилища в типы
- App.tsx - конструктор приложения
- index.tsx - точка входа для бразера
- index.sass - сброс общих стилей