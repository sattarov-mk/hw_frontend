import { useState } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/newExepnses/NewExpenses';


// Здесь лежат расходы, которые мы сразу показываем на экране,
// чтобы интерфейс не был пустым при первом рендере.
const DUMMY_EXPENSES = [
  {
    // У каждого элемента списка должен быть уникальный id
    // для правильного обновления списка
    id: 'e1',
    title: 'Cola',
    price: 100,
    // Объект Date для дальнейшей работы с датой------ фильтрации по году, красивого вывода дня/месяца/года итд и тп
    date: new Date(2025, 1, 12),
  },
  {
    id: 'e2',
    title: 'Carpet',
    price: 2500,
    date: new Date(2026, 10, 9),
  },
  {
    id: 'e3',
    title: 'Sofa',
    price: 10330,
    date: new Date(2024, 3, 6),
  },
];

function App() {

  // В нём хранится массив всех расходов
  // Когда state меняется автоматически перерисовывается интерфейс
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Этот обработчик получает новый расход из дочернего компонента
  // Мы добавляем его в начало массива, чтобы новый элемент сразу отображался сверху
  const addExpenseHandler = (expense) => {
    
    // prevExpenses — всегда актуальное предыдущее значение массива расходов, даже если обновлений было много
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      {/*
        Форма добавления нового расхода
        Через prop onAdd передаю функцию наверх,
        чтобы дочерний компонент мог отправить новые данные в App
      */}
      <NewExpenses onAdd={addExpenseHandler} />

      {/*
        Список расходов
        Передаём текущий массив расходов в компонент,
        который отвечает за фильтрацию и отображение
      */}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
