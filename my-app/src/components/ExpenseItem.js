import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
function ExpenseItem(props) {

    let title  = props.title;

    function change() {
        title = "changee"
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