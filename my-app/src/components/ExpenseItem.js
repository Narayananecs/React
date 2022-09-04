import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';
function ExpenseItem(props) {

    let [title,changeValue]  = useState(props.title);

    function change() {
        changeValue("changee");
        console.log(title);
    }

    
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
                <button onClick={change}>Change</button>
            </div>
        </Card>);
}

export default ExpenseItem;