import React, { useState, useEffect } from "react";
import ExpenseDate from "../expenseDate/ExpenseDate";
import ExpenseFilter from "../expenseFilter/ExpenseFilter";
import ExpensesChart from "../expensesChart/ExpensesChart";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  // const [expensesItems, setExpensesItems] = useState(expenses);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredItems = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="card">
      <ExpenseFilter
        filterChangeHandler={filterChangeHandler}
        filteredYear={filteredYear}
      />
      <ExpensesChart expenses={filteredItems} />
      {filteredItems.length === 0 && (
        <p
          style={{
            fontSize: "20px",
            color: "white",
            textAlign: "center",
          }}
        >
          No expneses found.
        </p>
      )}

      {filteredItems.length > 0 &&
        filteredItems.map((expense, key) => (
          <div className="expense-item" key={key}>
            <div className="">
              <ExpenseDate date={expense.date} />
            </div>
            <div className="expense-item__description ">
              <h2>{expense.title} </h2>
              <div className="expense-item__price">{expense.amount}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ExpenseItem;
