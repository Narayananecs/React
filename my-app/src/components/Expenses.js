import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [year, setYear] = useState('');
  console.log(year);
  console.log(props)
  const expenseYearHandler = (data) => {
    setYear(data);
  }
    return (
        <div>
          <ExpensesFilter onChangeYear={expenseYearHandler}/>
          <Card className="expenses">
        {props.data.map((expense) => {
            return <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount}/>
          })}
      </Card> 
      </div>
    );
}

export default Expenses