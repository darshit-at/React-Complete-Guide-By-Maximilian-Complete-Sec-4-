import React from 'react';
import './ExpenseForm.css'
const NewExpenseButton = (props) => {
    const handleChangeEditigValue = () =>{
        props.onStartEditingHandler(true);
    }
    
  return (
    <div className='new-expense__actions'>
        <button type='button' onClick={handleChangeEditigValue}>Add new Expense</button>
    </div>
  )
};
export default NewExpenseButton;