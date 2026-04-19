import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  // Получаем год из объекта Date, например 2026.
  const year = date.getFullYear();

  // Форматируем месяц в длинный вид: January, February и т.д.
  const month = date.toLocaleString('en-US', { month: 'long' });

  // Форматируем день двумя цифрами: 01, 02, 12 и т.д.
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className="expense-date">
      {/* День */}
      <div className="expense-date__day">{day}</div>

      {/* Месяц */}
      <div className="expense-date__month">{month}</div>

      {/* Год */}
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
