import React, { useState } from "react";
import "./Form.css";

function Form() {
  return (
    <div id="submit-form">
      <form className="input-box">
      <div id="input-box">
      <input
          type="date"
          id="date"
          name="date"
          placeholder="Date"
          className="input"
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          className="input"
        />
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category"
          className="input"
        />
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Amount"
          className="input"
        />

      </div>

        <button type="submit" class="btn btn-primary">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default Form;
