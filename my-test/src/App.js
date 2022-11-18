import { useState } from 'react';
import './App.css';
import CarForm from './CarForm';
import DisplayCars from './DisplayCars';

const carsList = [
  {name:"Etios",date:"10-09-2022",amount:7890, regNo:"TN03S4315"},
  {name:"Etios",date:"10-09-2022",amount:1250, regNo:"TN82B1768"},
  {name:"Etios",date:"10-09-2022",amount:4580, regNo:"TN82B8597"},
  {name:"Etios",date:"10-09-2022",amount:7856, regNo:"TN51K3744"},
  {name:"Etios",date:"10-09-2022",amount:4562, regNo:"TN19AJ8923"}
]
function App() {
  let [showForm, setShowForm] = useState(true);

  function formVisibilityHandler() {
    setShowForm(!showForm);
  }

  let form ="";
  if(showForm === true) {
    form = <div><CarForm/></div>
  }
  return (
    <div >
      {form}
     <DisplayCars carsList={carsList}/>
     <button type='button' onClick={formVisibilityHandler}>Test </button>
    </div>
  );
}

export default App;
