import react, { useState } from "react";
import ExpenseItem from "./components/expenseItem/ExpenseItem";

import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2019, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (data) => {
    setExpenses((pre) => [data, ...pre]);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpenseDate={addExpenseHandler} />
      <ExpenseItem expenses={expenses} />
    </div>
  );
};

export default App;
