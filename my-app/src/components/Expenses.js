import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [year, setYear] = useState('');
  console.log(year);
  const expenseYearHandler = (data) => {
    setYear(data);
  }
    return(
        <div>
          <ExpensesFilter onChangeYear={expenseYearHandler}/>
          <Card className="expenses">
        <ExpenseItem title={props.data[0].title} date={props.data[0].date} amount={props.data[0].amount}></ExpenseItem>
      <ExpenseItem title={props.data[1].title} date={props.data[1].date} amount={props.data[1].amount}></ExpenseItem>
      <ExpenseItem title={props.data[2].title} date={props.data[2].date} amount={props.data[2].amount}></ExpenseItem>
      </Card> 
      </div>
    );
}

export default Expenses