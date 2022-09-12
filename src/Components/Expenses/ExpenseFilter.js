import React, { useState } from 'react';
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const changeEventHandler = (e) => {
        props.onChangeFilter(e.target.value);
    }
    
    return (
        <div className='expense-filter'>
             <div className='expense-year'>
                <h2>Filter by year</h2>
                <div className='select_year'>
                    <select value={props.select} onChange={changeEventHandler}>
                        <option name='year'>2019</option>
                        <option name='year'>2020</option>
                        <option name='year'>2021</option>
                        <option name='year'>2022</option>
                    </select>

                  </div>
             </div>

        </div>
    )
};
export default ExpenseFilter;