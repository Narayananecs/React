import { useState } from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "../components/ExpensesList";
function Expenses(props) {
  const [year, setYear] = useState('2022');
  const expenseYearHandler = (data) => {
    setYear(data);
  }
  let expensesList = props.data.filter(expense => expense.date.getFullYear().toString() === year);

  
  return (
    <div>
      <ExpensesFilter selected={year} onChangeYear={expenseYearHandler} />
      <Card className="expenses">
        <ExpensesList expensesList = {expensesList} />
      </Card>
    </div>
  );
}

export default Expenses