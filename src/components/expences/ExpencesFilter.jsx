import './ExpencesFilter.css';

const ExpensesFilter = ({ selectedYear, onChangeFilter, years }) => {
  // Срабатывает при выборе нового значения в выпадающем списке.
  // event.target.value содержит выбранный год.
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="year-filter">Filter by year</label>

        {/*
          value делает select контролируемым элементом.
          Это значит, что текущее выбранное значение полностью
          синхронизировано с React state.
        */}
        <select
          id="year-filter"
          value={selectedYear}
          onChange={dropdownChangeHandler}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
