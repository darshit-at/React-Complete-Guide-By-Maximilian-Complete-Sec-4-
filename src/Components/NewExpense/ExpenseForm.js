import React, { useState } from 'react';
import './ExpenseForm.css';

let expenseId = 1;

const ExpenseForm = (props) => {
    const [userInput, setuserInput] = useState(
        {
            enterTitle: '',
            enterAmount: '',
            enterDate: ''
        }
    );

    const titleHandleChange = (e) => {
        setuserInput((prewState) => {

            return {
                ...prewState,
                enterTitle: e.target.value
            }
        });

    };

    const amountHandleChange = (e) => {
        setuserInput((prewState) => {
      
            return {
                ...prewState,
                enterAmount: e.target.value
            }
        });

    };

    const dateHandleChange = (e) => {
        setuserInput((prewState) => {
            return {
                ...prewState,
                enterDate: e.target.value
            }
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { enterTitle , enterDate ,enterAmount } =userInput; 
        const expenseData = {
        id:expenseId++,
           title: enterTitle,
           amount:enterAmount, 
           date :new Date(enterDate)
        }

        props.onSaveExpenseData(expenseData);

        setuserInput( {
            enterTitle: '',
            enterAmount: '',
            enterDate: ''
        })
    }

    const handleChangeEditigValue = () =>{
        props.onStartEditingHandler(false);
    }
    

    const { enterTitle , enterDate ,enterAmount } = userInput; 
    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleHandleChange}  value ={enterTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={amountHandleChange}
                        value ={enterAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateHandleChange} value ={enterDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit' onClick={handleChangeEditigValue}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;