import React, { useState } from "react";
import ExpenseForm from "./form/ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onAddExpenseDate }) => {
  const [showForm, setShowForm] = useState(false);
  const onSaveExpenseDateHandler = (expensesDate) => {
    const data = {
      ...expensesDate,
      id: Math.random().toString(),
    };
    console.log(data);
    onAddExpenseDate(data);
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="new-expense">
      {!showForm ? (
        <button className="new-expense__actions" onClick={showFormHandler}>
          Add Expense
        </button>
      ) : (
        <ExpenseForm
          onCalnseForm={showFormHandler}
          onSaveExpenseDate={onSaveExpenseDateHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
