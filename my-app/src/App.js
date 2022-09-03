import ExpenseItem from './components/ExpenseItem'
import './App.css';

function App() {

  const expenses = [
    {id:'1', title: 'Hotel', date: new Date(2022,9,15), amount: 780},
    {id:'2', title: 'Petrol', date: new Date(2022,9,15), amount: 700},
    {id:'3', title: 'Room', date: new Date(2022,9,15), amount: 780}
  ]
  return (
    <div className="App">
      Intro to react
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}></ExpenseItem>
    </div>
  );
}

export default App;
