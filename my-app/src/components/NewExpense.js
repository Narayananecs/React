import ExpenseForm from "./ExpenseForm"
import '../components/NewExpense.css'
function NewExpense(props) {
    const expenseDataHandler = expenseData => {
        console.log(expenseData);
        props.onSaveExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
        </div>
    )
}

export default NewExpense