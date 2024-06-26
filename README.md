# Информационная система для проверки знаний учащихся

## Функционал

- **Варианты ответа**: выбор одного или нескольких вариантов.
- **Короткий ответ**: текстовое поле для ввода краткого ответа.
- **Развернутый ответ**: текстовое поле для ввода развернутого ответа.
- **Ограничение по времени**: возможность задания времени на выполнение теста.
- **Сохранение прогресса**: прогресс выполнения теста сохраняется при перезагрузке страницы.


## Технологии

- **React**: для создания пользовательского интерфейса.
- **TypeScript**: для типизации и повышения надежности кода.
- **@reduxjs/toolkit**: для управления состоянием приложения.
- **redux-persist**: для сохранения состояния в `localStorage` и восстановления прогресса при перезагрузке страницы.
- **react-redux**: для интеграции Redux с React.
- **classnames**: для управления классами CSS.
- **Tailwind CSS** и **SCSS**: для стилизации приложения.

- `src/`
  - `components/`
    - `Final/Final.tsx`: компонент для отображения финальной страницы теста.
    - `Navigation/Navigation.tsx`: компонент для навигации между вопросами.
    - `QuestionLong/QuestionLong.tsx`: компонент для отображения вопросов с развернутым ответом.
    - `QuestionShort/QuestionShort.tsx`: компонент для отображения вопросов с коротким ответом.
    - `QuestionSingle/QuestionSingle.tsx`: компонент для отображения вопросов с одним вариантом ответа.
    - `QuestionMultiple/QuestionMultiple.tsx`: компонент для отображения вопросов с несколькими вариантами ответа.
    - `Render/Render.tsx`: компонент для рендеринга вопросов в зависимости от их типа.
    - `TestPage/TestPage.tsx`: основной компонент страницы теста.
    - `Timer/Timer.tsx`: компонент таймера для отсчета времени выполнения теста.
  - `hooks/`
    - `useAnswers.ts`: кастомный хук для управления состоянием ответов.
  - `utils/`
    - `formattedTime.ts`: утилита для форматирования времени.
    - `questions.ts`: утилита для работы с вопросами теста.
  - `interface/`
    - `question.ts`: интерфейсы для типизации вопросов и ответов.
  - `features/`
    - `questions.slice.tsx`: Redux slice для управления состоянием вопросов.
    - `store/store.ts`: конфигурация Redux store и persist.

## Основные файлы

### `questionsSlice.tsx`

Содержит Redux slice с определением начального состояния, редюсеров и действий для управления состоянием вопросов.

### `store.ts`

Конфигурирует Redux store с использованием `@reduxjs/toolkit` и `redux-persist`, настраивает middleware для игнорирования проверок сериализуемости для действий redux-persist.


### `TestPage.tsx`

Основной компонент страницы теста, который объединяет все компоненты тестирования, такие как вопросы, навигация и таймер. Этот компонент управляет отображением вопросов и навигацией по ним.
