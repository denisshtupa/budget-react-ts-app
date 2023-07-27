import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import { ITransaction } from "../utils/interfaces/app-interfaces";

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((trans: ITransaction) => 
          <Transaction transaction={trans} key={trans.id} />
        )}
      </ul>
    </div>
  );
};
