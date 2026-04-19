import { useState } from 'react';
import './ExpenseForm.css';
import Button from '../ui/Button';

const ExpenseForm = ({ onGet }) => {
  // Один объект состояния для всех полей формы.
  // Это удобно, когда поля логически относятся к одной сущности — расходу.
  const [userInputs, setUserInputs] = useState({
    title: '',
    price: '',
    date: '',
  });

  // Универсальный обработчик для всех input.
  // Мы используем name у поля, чтобы понять,
  // какое именно свойство объекта нужно обновить.
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    // Обновляем только одно поле,
    // а остальные сохраняем через spread-оператор.
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Простая валидация:
    // не даём отправить пустые данные или цену <= 0.
    if (
      userInputs.title.trim() === '' ||
      userInputs.price.trim() === '' ||
      userInputs.date.trim() === '' ||
      Number(userInputs.price) <= 0
    ) {
      return;
    }

    // Собираем итоговый объект расхода.
    // price превращаем в число,
    // а строку даты превращаем в объект Date.
    onGet({
      title: userInputs.title.trim(),
      price: Number(userInputs.price),
      date: new Date(userInputs.date),
    });

    // После успешной отправки очищаем форму.
    setUserInputs({
      title: '',
      price: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expense-title">Title</label>
          <input
            id="expense-title"
            name="title"
            type="text"
            value={userInputs.title}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="expense-price">Price</label>
          <input
            id="expense-price"
            name="price"
            type="number"
            min="0.01"
            step="0.01"
            value={userInputs.price}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="expense-date">Date</label>
          <input
            id="expense-date"
            name="date"
            type="date"
            min="2020-01-01"
            max="2030-12-31"
            value={userInputs.date}
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        {/*
          type="submit" говорит браузеру,
          что эта кнопка должна отправлять форму.
        */}
        <Button type="submit">Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
