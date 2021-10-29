import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = (event) => {
    event.preventDefault();
    setShowForm(true);
  };
  const hideFormHandler = (event) => {
    setShowForm(false);
  };
  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={showFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onHideForm={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
