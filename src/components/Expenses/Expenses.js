import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props){
  
  const [selectedFilter, setSelectedFilter] = useState("2020");
  const changeFilterHandler = selectedDate => {
    setSelectedFilter(selectedDate);
    console.log(selectedFilter);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilter}
        onChangeDate={changeFilterHandler}
      />
      {props.items.map(item => (
        
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        
      ))}
    </Card>
  );

}

export default Expenses;