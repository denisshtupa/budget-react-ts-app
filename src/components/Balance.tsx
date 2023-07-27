import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { ITransaction } from '../utils/interfaces/app-interfaces';

export const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts: number[] = transactions.map((trans: ITransaction) => trans.amount);
    const total = amounts.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);

    return (
        <div className="app-balance">
            <h4>Your balance</h4>
            <h1>${total}</h1>
        </div>
    )
}
