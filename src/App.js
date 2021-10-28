import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {

  const expense_data = [
    { title: "Oculus", amount: 230001, date: new Date(2021, 10, 5) },
    { title: "Switch", amount: 130001, date: new Date(2020, 3, 2) },
    { title: "Books", amount: 50236, date: new Date(2021, 1, 15) },
    { title: "Games", amount: 50236, date: new Date(2021, 11, 15) },
  ];

  const addExpenseHandler = expense => {
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expense_data}/>
    </div>
  );
}

export default App;
