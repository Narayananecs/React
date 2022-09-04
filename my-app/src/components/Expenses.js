import ExpenseItem from "./ExpenseItem"
function Expenses(props) {
    return(
        <div>
        <ExpenseItem title={props.data[0].title} date={props.data[0].date} amount={props.data[0].amount}></ExpenseItem>
      <ExpenseItem title={props.data[1].title} date={props.data[1].date} amount={props.data[1].amount}></ExpenseItem>
      <ExpenseItem title={props.data[2].title} date={props.data[2].date} amount={props.data[2].amount}></ExpenseItem>
      </div>
    );
}

export default Expenses