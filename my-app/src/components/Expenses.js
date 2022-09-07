import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [year, setYear] = useState('2022');
  const expenseYearHandler = (data) => {
    setYear(data);
  }
  let expensesList = props.data.filter(expense => expense.date.getFullYear().toString() === year);
  let expenseContent = <p >No expense found</p>
  if(expensesList.length > 0) {
    expenseContent = expensesList.map((expense) => {
      return <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />
    })
  }
  
  return (
    <div>
      <ExpensesFilter selected={year} onChangeYear={expenseYearHandler} />
      <Card className="expenses">
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses