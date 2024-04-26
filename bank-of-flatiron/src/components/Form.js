import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [handleSubmit, sethandleSubmit] = useState([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const categoryChange = (e) => {
    setCategory(e.target.value);
  };

  const amountChange = (e) => {
    setAmount(e.target.value);
  };


  const handleSubmission = (event) => {
    event.preventDefault();
    if (
      date.trim() &&
      description.trim() &&
      category.trim() &&
      amount.trim() 
    ) {
      sethandleSubmit([
        ...handleSubmit,
        {
          date: date,
          description: description,
          category: category,
          amount: amount
        },
      ]);
      setDate("");
      setDescription("");
      setCategory("");
      setAmount("");
      console.log(handleSubmit);
    }
  };

  return (
    <div id="submit-form">
      <form className="input-box" onSubmit={handleSubmission}>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Date"
          className="input"
          onChange={dateChange}
          value={date}
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          className="input"
          onChange={descriptionChange}
          value={description}
        />
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category"
          className="input"
          onChange={categoryChange}
          value={category}
        />
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Amount"
          className="input"
          onChange={amountChange}
          value={amount}
        />
      </form>
      <button type="submit" class="btn btn-primary" onClick={handleSubmission}>
        Submit
      </button>
    </div>
  );
}

export default Form;
