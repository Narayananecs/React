import Expenses from './components/Expenses'
import './App.css';
import './components/Expenses.css'
import Card from './components/Card';


function App() {

  const expenses = [
    {id:'1', title: 'Hotel', date: new Date(2022,9,15), amount: 780},
    {id:'2', title: 'Petrol', date: new Date(2022,9,15), amount: 700},
    {id:'3', title: 'Room', date: new Date(2022,9,15), amount: 780}
  ]
  return (
    <Card className="expenses">
      Intro to react
      <Expenses data = {expenses}/>
    </Card>
  );
}

export default App;
