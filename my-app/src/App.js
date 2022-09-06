import Expenses from './components/Expenses'
import './App.css';
import './components/Expenses.css'
import Card from './components/Card';
import NewExpense from './components/NewExpense';
import { useState } from 'react';

let initialExpenses = [
  {id:'1', title: 'Hotel', date: new Date(2022,9,15), amount: 780},
  {id:'2', title: 'Petrol', date: new Date(2022,9,15), amount: 710},
  {id:'3', title: 'Room', date: new Date(2022,9,15), amount: 730}
]
function App() {

  let [expense, setExpense] = useState(initialExpenses);
  const saveExpense = (data) =>{
    console.log(data);
    data.id = Math.random().toString()
    data.date = new Date(data.date)
    setExpense(prevState => {
      return [data, ...prevState];
    });
  }
  return (
    <div>
    <NewExpense onSaveExpense={saveExpense}/>
    <Card className="expenses">
      <Expenses data = {expense}/>
    </Card>
    </div>
  );
}

export default App;
