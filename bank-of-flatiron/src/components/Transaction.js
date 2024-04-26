import React from "react";
import TransactionItem from "./TransactionItem";
import { bankTransactions } from "./Data";

function Transaction() {
  return (
    <div>
     <TransactionItem props = {bankTransactions}/>
    </div>
  );
}

export default Transaction;
