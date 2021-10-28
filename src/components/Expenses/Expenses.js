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
      <ExpensesFilter selected={selectedFilter} onChangeDate = {changeFilterHandler}/>
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
    </Card>
  );

}

export default Expenses;