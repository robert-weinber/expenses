import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2020");
  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === selectedFilter;
  });

  const changeFilterHandler = (selectedDate) => {
    setSelectedFilter(selectedDate);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilter}
        onChangeDate={changeFilterHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
