import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { ITransaction } from '../utils/interfaces/app-interfaces';

export const IncomeExp = () => {
  const { transactions } = useContext(GlobalContext);
  
  const amounts: number[] = transactions.map((trans: ITransaction) => trans.amount);

  const income: string = amounts.filter(x => x > 0).reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
  const expense: string = amounts.filter(x => x < 0).reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">${Math.abs(Number(expense)).toFixed(2)}</p>
      </div>
    </div>
  )
}
