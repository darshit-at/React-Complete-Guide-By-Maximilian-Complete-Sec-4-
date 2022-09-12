import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {

    const chartDataPoint =[
        {label : 'jan' ,value :0},
        {label : 'feb' ,value :0},
        {label : 'mar' ,value :0},
        {label : 'April' ,value :0},
        {label : 'may' ,value :0},
        {label : 'jun' ,value :0},
        {label : 'july' ,value :0},
        {label : 'Aug' ,value :0},
        {label : 'sep' ,value :0},
        {label : 'octo' ,value :0},
        {label : 'Nov' ,value :0},
        {label : 'Dec' ,value :0}
    ];


for(const expense of props.expense) {
const expenseMonth =expense.date.getMonth();
chartDataPoint[expenseMonth].value += parseInt(expense.amount);

}
    return (
        <Chart datapoint = {chartDataPoint}/>
    )
};
export default ExpenseChart;