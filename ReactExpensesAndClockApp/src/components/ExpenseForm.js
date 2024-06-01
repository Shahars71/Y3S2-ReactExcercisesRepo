import "./ExpenseForm.css";
import React, { UseState, useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    console.log(event);
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    console.log(event);
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(event);
    setDate(event.target.value);
  };
  const submitHandler = (event) => {

    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    console.log(expenseData);

    setTitle("")
    setAmount("")
    setDate("")

    fetch (
        "http://localhost:3000/addtomongo"+expenseData
    ).catch((err) => console.log(err))



    
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div>
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2024-06-01"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <button type="submit">Add expense</button>
    </form>
  );
};

export default ExpenseForm; 