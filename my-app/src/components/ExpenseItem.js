import './ExpenseItem.css'
function ExpenseItem() {
    const date = new Date(2022,9,15);
    const expenseItem = 'Hotel';
    const amount = '299';
    return (
        <div className='expense-item'>
            <div>{date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseItem}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </div>);
}

export default ExpenseItem;