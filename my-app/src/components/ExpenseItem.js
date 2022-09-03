import './ExpenseItem.css'
function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>Sep 15th 2022</div>
            <div className='expense-item__description'>
                <h2>Hotel</h2>
                <div className='expense-item__price'>299</div>
            </div>
        </div>);
}

export default ExpenseItem;