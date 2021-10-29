import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Oculus", amount: 230001, date: new Date(2021, 10, 5) },
  { id: "e2", title: "Switch", amount: 130001, date: new Date(2020, 3, 2) },
  { id: "e3", title: "Books", amount: 50236, date: new Date(2021, 1, 15) },
  { id: "e4", title: "Games", amount: 50236, date: new Date(2021, 11, 15) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
