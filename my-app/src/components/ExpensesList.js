import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

const ExpensesList = (props) => {

    if (props.expensesList.length === 0) {
        return <p className="expenses-list__fallback">No expense found</p>
        
    } 
    return (<ul>
        {props.expensesList.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />
        ))}</ul>)
}

export default ExpensesList