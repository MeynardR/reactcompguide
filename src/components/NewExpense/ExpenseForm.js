import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // document.getElementById('').addEventListener('click', (event) => {})

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Using single state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);

        // console.log('Title changed');

        // Setting state for single state example this will work however this is wrong
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // Safer way of setting state for single state example
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });

    };

    const amountChangedHandler = event => {
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
    };

    const dateChangedHandler = event => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangedHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2021-01-01" 
                        max="2024-12-31"
                        value={enteredDate}
                        onChange={dateChangedHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;