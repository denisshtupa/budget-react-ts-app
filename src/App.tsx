import React from 'react'
import {GlobalProvider } from './context/GlobalState'
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExp } from './components/IncomeExp';
import { TransactionsList } from './components/TransactionsList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance/>
          <IncomeExp/>
          <TransactionsList/>
          <AddTransaction/>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
