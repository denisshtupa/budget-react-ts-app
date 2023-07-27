import React, { useState, useContext, Fragment} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { ITransaction } from '../utils/interfaces/app-interfaces';

export const AddTransaction = () => {
    const [text, setText] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    const { addTransaction } = useContext(GlobalContext);
    const submitForm = (e) => {
        e.preventDefault();        
        const newTransaction: ITransaction = {
            id: Math.floor(Math.random() * 10000000000),
            text, 
            amount: +amount
        }        
        addTransaction(newTransaction);
    };


    return (
        <Fragment>
            <h3>Add transaction</h3>
            <form onSubmit={submitForm}>
                <div className="form-control">
                    <label htmlFor="text">Transaction name</label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /></label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(Number(e.target.value))} 
                        placeholder="Enter amount..." 
                    />
                </div>
                <button 
                    className={(text === "" || parseInt(amount.toString()) === 0) ? 'btn disable-button': 'btn'}
                >
                    Add transaction
                </button>
            </form>
        </Fragment>
    )
}
