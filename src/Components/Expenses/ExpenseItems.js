import './ExpenseItem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate'
import { useState } from 'react';


const ExpenseItems = (props) => {
    const [displayBlock, setDisplayProperties] = useState('flex');

    const deleteHandler = (e) => {

        if (Number(e.target.id) === props.id) {
            setDisplayProperties('none');
        }
    }

    return (
        <div className='expense-item' style={{ display: displayBlock }}>
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__description" >
                <h2>{props.title}</h2>
                <h4 className='expense-item__price'>$ {props.amount}</h4>
            </div>
            <button type='button' id={props.id} onClick={deleteHandler}>Delete</button>

        </div>
    );
};
export default ExpenseItems;