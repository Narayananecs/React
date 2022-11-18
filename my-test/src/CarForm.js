import { useState } from "react";

const CarForm = () => {

    const [clik, setClick] = useState('');
    const [name, setname] = useState('')
    const [regNo, setregNo] = useState('')
    const [amount, setamount] = useState('')
    const [date, setdate] = useState('')

    console.log("init"+name,regNo,date,amount)
function submitHandler(event) {
    event.preventDefault();
    console.log(name,regNo,date,amount)
}

function nameHandler(event) {
    setname(event.target.value);
}

function regNoHandler(event) {
    setregNo(event.target.value);
}

function dateHandler(event) {
    setdate(event.target.value);
}

function amountHandler(event) {
    setamount(event.target.value);
}
let i=0;
function clickHandler() {
    console.log(clik)
    setClick('test'+ i++)
}
    return (
        <div>
            <form onSubmit={submitHandler}>
            <label>Name</label>
            <input type="text" value={name} onChange={nameHandler}/>
            <label>Reg No</label>
            <input type="number" value={regNo} onChange={regNoHandler}/>
            <label>Amount</label>
            <input type="number" value={amount} onChange={amountHandler}/>
            <label>Date</label>
            <input type="date" value={date} onChange={dateHandler}/>
            <button type="sumbit">Add</button>
            </form>
            <button type="button" onClick={clickHandler}>Click</button>
        </div>
    )
}

export default CarForm