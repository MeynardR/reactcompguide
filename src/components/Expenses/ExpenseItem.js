import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    /* let title = props.title; */

    const clickHandler = () => {
        /* title = 'Updated'; */
        setTitle('Updated!');
        console.log('Clicked!!!');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item-description">
                <h2>{title}</h2>
                <div className="expense-item-price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            {/*<button onClick={()=> {console.log('Clicked!')}}>Change Title</button>*/}
        </Card>
    );
}

export default ExpenseItem;