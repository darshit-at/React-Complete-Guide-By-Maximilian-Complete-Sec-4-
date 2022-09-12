import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import NewExpenseButton from './NewExpenseButton';

const NewExpense = (props) => {
    const [isEditing, setisEditing] = useState(false);
    const saveExpenseDatHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData
        };
        props.onAddExpense(expenseData);

    };

    const StartEditingHandler = (currentEditingValue) => {
        setisEditing(currentEditingValue);
    };

    return (
        <div className='new-expense'>
            {
            isEditing ? 
            <ExpenseForm onSaveExpenseData={saveExpenseDatHandler} onStartEditingHandler={StartEditingHandler} /> : 
            <NewExpenseButton onStartEditingHandler={StartEditingHandler} />
            }

        </div>
    );
};
export default NewExpense;