import React from "react";
import "./TransactionItem.css"

function TransactionItem({ props }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.map(
            ({ id, date, description, category, amount, quantity }) => (
              <tr key={id}>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>Ksh {amount}</td>
              </tr>
            )
          )}
          ;
        </tbody>
      </table>
    </div>
  );
}

export default TransactionItem;
