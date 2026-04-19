import { useMemo, useState } from 'react';
import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpencesFilter';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  // Вычисляем список доступных годов на основе самих расходов.
  // useMemo нужен, чтобы не пересчитывать массив без необходимости
  // на каждом рендере, если expenses не изменились.
  const availableYears = useMemo(() => {
    const years = expenses.map((expense) => expense.date.getFullYear().toString());

    // Set убирает дубликаты, затем сортируем годы по убыванию.
    return [...new Set(years)].sort((a, b) => Number(b) - Number(a));
  }, [expenses]);

  // По умолчанию показываем самый свежий доступный год.
  // Если список пустой, берём текущий год, чтобы state всё равно был строкой.
  const [filteredYear, setFilteredYear] = useState(
    availableYears[0] ?? new Date().getFullYear().toString()
  );

  // Когда пользователь выбирает год в select,
  // просто обновляем локальное состояние фильтра.
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Оставляем только те расходы, у которых год совпадает
  // с выбранным значением в фильтре.
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      {/* Блок фильтра по году */}
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
        years={availableYears}
      />

      {/*
        Если после фильтрации список пустой — показываем понятное сообщение,
        а не оставляем пользователя с пустым экраном.
      */}
      {filteredExpenses.length === 0 ? (
        <p className="expenses__fallback">No expenses found for this year.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      )}
    </Card>
  );
};

export default Expenses;
