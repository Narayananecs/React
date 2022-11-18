import { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {

    let [showForm, setFormVisibility] = useState(false);
    const [enteredTitle, setTile] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleHandler = (event) => {
        setTile(event.target.value);
    }

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const data  = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }
        console.log(data);
        props.onSaveExpenseData(data);
        setTile('');
        setAmount('');
        setDate('');
        setFormVisibility(false);
    }

    const formVisibiityHandler = () => {
        showForm = !showForm;
        setFormVisibility(showForm)
    }

    if(showForm === false) {
        return (
            <div >
                    <button type='submit' onClick={formVisibiityHandler}>Add Expenses</button>
            </div>
        )
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateHandler}/>
                </div>
            </div>
            <div>
            <span >
                    <button type='submit' onClick={formVisibiityHandler}>Cancel</button>
            </span>
            <span>
                    <button type='submit'>Add Expenses</button>
            </span>
            </div>
        </form>
    )
}

export default ExpenseForm