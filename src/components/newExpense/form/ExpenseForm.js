import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseDate, onCalnseForm }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const changeHandler = (e) => {
    return e.target.value;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expensesDate = { title, amount: +amount, date: new Date(date) };
    onSaveExpenseDate(expensesDate);
    setTitle("");
    setDate("");
    setAmount("");
    onCalnseForm();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(changeHandler(e))}
            value={title}
          />
        </div>{" "}
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => setAmount(changeHandler(e))}
            value={amount}
          />
        </div>{" "}
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => setDate(changeHandler(e))}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCalnseForm}>Cansle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
