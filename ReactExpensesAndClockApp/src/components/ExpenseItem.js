import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import React, { useState } from "react"
import Card from './Card.js';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)
    const [amount, setAmount] = useState(props.amount)
    const [date, setDate] = useState(props.date)

    const clickFunc = () => {
        setTitle("clicked!");
    }

    const clickHandlerServer = () => {
        fetch(
            "http://localhost:3000/countries" + title + "/" + amount + "/" + date  
        ).catch((error) => console.log(error))
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className="expense-item__description "> {title}</div>
            <div className="expense-item__price"> {amount}</div>
            <button onClick={clickFunc} >change title </button>
            <button onClick = {clickHandlerServer} >Add to server</button>
        </Card>
    );
}

export default ExpenseItem;