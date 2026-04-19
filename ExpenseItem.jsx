import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      {/* Отдельный компонент для отображения даты расхода */}
      <ExpenseDate date={expense.date} />

      {/*
        Блок описания расхода.
        Сюда выводим название и цену.
      */}
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">{expense.price} KGS</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
