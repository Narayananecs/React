import { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm() {

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
        setTile('');
        setAmount('');
        setDate('');
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
            <div className="new-expense__actions">
                    <button type='submit'>Submit</button>
                </div>
        </form>
    )
}

export default ExpenseForm