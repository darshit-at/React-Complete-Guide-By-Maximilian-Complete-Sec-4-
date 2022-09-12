import React, { useState } from 'react';
import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
const Expenses = (props) => {
  const [filterYear, setfilterYear] = useState('2022');


  const filterChangeHandler = (selectYear) => {
    setfilterYear(selectYear);

  };

  const filterExpense = props.Expense.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filterYear);
  });



  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter select={filterYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expense = {filterExpense}/>
        <ExpenseList items={filterExpense} />

      </Card>
    </div>


  )
};
export default Expenses;