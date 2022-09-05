import Expenses from './components/Expenses'
import './App.css';
import './components/Expenses.css'
import Card from './components/Card';
import NewExpense from './components/NewExpense';


function App() {

  const expenses = [
    {id:'1', title: 'Hotel', date: new Date(2022,9,15), amount: 780},
    {id:'2', title: 'Petrol', date: new Date(2022,9,15), amount: 700},
    {id:'3', title: 'Room', date: new Date(2022,9,15), amount: 780}
  ]
  const saveExpense = (data) =>{
    console.log(data);
  }
  return (
    <div>
    <NewExpense onSaveExpense={saveExpense}/>
    <Card className="expenses">
      <Expenses data = {expenses}/>
    </Card>
    </div>
  );
}

export default App;
