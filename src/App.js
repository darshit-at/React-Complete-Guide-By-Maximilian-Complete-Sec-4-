import React, { useState } from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const App = () => {
  
  const [userExpenseData, getUserExpenseData] = useState([]);

  const AddExpenseHandler = (getExpenseData) => {
    const expenseData = {
      ...getExpenseData
    };
    //use spread operator
    getUserExpenseData(() => {
      return ([...userExpenseData, expenseData]);
    })

  };


  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses Expense={userExpenseData} />
    </div>
  );
}

export default App;
