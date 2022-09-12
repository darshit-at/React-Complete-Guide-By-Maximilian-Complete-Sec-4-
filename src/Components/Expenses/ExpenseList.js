import React from 'react';
import ExpenseItems from './ExpenseItems';
import './ExpenseList.css';

const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expense</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => {
        return (
          <ExpenseItems
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            id={expense.id}
            key={`expense-item-${expense.id}`}

          />
        )
      })}
    </ul>
  )
}
export default ExpenseList;