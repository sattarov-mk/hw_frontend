import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
import Card from '../ui/Card';

const NewExpenses = ({ onAdd }) => {
  // Получаем данные из формы,
  // добавляем уникальный id и передаём выше в App.
  const getExpenseHandler = (expense) => {
    const expenseWithId = {
      ...expense,
      id: Math.random().toString(),
    };

    onAdd(expenseWithId);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onGet={getExpenseHandler} />
    </Card>
  );
};

export default NewExpenses;
