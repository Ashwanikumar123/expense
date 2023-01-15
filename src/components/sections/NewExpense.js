import React, { useState } from "react";

const NewExpense = () => {
    const [inputField, setInputField] = useState({
        expense_title   : '',
        expense_amount  : '',
        expense_day     : '',
        expense_date    : '',
    })

    const inputsHandler = (e) => {
        setInputField(prevState => {
            return {...prevState,  [e.target.name]: e.target.value}
        });
    }

    const saveExpenseHandler = (e) => {
        e.preventDefault();
        const dateString = (date) => {
            const dates = new Date(date);  // 2009-11-10
            const day = dates.toLocaleString('default', { day: '2-digit' })
            const month = dates.toLocaleString('default', { month: 'short' });
            const year = dates.toLocaleString('default', { year: 'numeric' });
            return day+' '+month+' '+year;
        }

        const newExpense = {
            'name'      : inputField.expense_title,
            'date'      : dateString(inputField.expense_date),
            'day'       : inputField.expense_day,
            'amount'    : inputField.expense_amount
        }

        console.log(newExpense)
    }

    // const validateForm = () => {

    //     let fields = this.state.fields;
    //     let errors = {};
    //     let formIsValid = true;

    //     if (!fields["username"]) {
    //         formIsValid = false;
    //         errors["username"] = "*Please enter your username.";
    //     }

    //     if (typeof fields["username"] !== "undefined") {
    //         if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
    //             formIsValid = false;
    //             errors["username"] = "*Please enter alphabet characters only.";
    //         }
    //     }

    //     if (!fields["emailid"]) {
    //         formIsValid = false;
    //         errors["emailid"] = "*Please enter your email-ID.";
    //     }

    //     if (typeof fields["emailid"] !== "undefined") {
    //         //regular expression for email validation
    //         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //         if (!pattern.test(fields["emailid"])) {
    //             formIsValid = false;
    //             errors["emailid"] = "*Please enter valid email-ID.";
    //         }
    //     }

    //     if (!fields["mobileno"]) {
    //         formIsValid = false;
    //         errors["mobileno"] = "*Please enter your mobile no.";
    //     }

    //     if (typeof fields["mobileno"] !== "undefined") {
    //         if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
    //             formIsValid = false;
    //             errors["mobileno"] = "*Please enter valid mobile no.";
    //         }
    //     }

    //     if (!fields["password"]) {
    //         formIsValid = false;
    //         errors["password"] = "*Please enter your password.";
    //     }

    //     if (typeof fields["password"] !== "undefined") {
    //         if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //             formIsValid = false;
    //             errors["password"] = "*Please enter secure and strong password.";
    //         }
    //     }

    //     this.setState({
    //         errors: errors
    //     });
    //     return formIsValid;
    // }

    return (
        <form method="POST" className='pad-bg' onSubmit={saveExpenseHandler} >
            <h4 className="text-center">Add Missing Expenses</h4>
            <div className="form-group">
                <label htmlFor="">Title</label>
                <input
                    type="text"
                    placeholder="Expense Title"
                    className="i-box form-control form-control-md"
                    name="expense_title"
                    onChange={inputsHandler}
                    value={inputField.expense_title.value}
                />
            </div>
            <div className="form-group">
                <label htmlFor="">Amount</label>
                <input
                    type="number"
                    placeholder="Expense Amount"
                    className="form-control form-control-md"
                    name="expense_amount"
                    onChange={inputsHandler}
                    value={inputField.expense_amount.value}
                />
            </div>
            <div className="form-group">
                <label htmlFor="">Day</label>
                <select
                    className="form-control form-control-md"
                    name="expense_day"
                    onChange={inputsHandler}
                    value={inputField.expense_day.value}
                >
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">Date</label>
                <div className="input-group date" data-provide="datepicker">
                    <input
                        type="date"
                        className="form-control form-control-md"
                        placeholder="Expense Date"
                        name="expense_date"
                        onChange={inputsHandler}
                        value={inputField.expense_date.value}
                    />
                </div>
            </div>
            <input
                type="submit"
                className="btn btn-outline-info btn-lg"
                value="Add Expense"
            />
        </form>
    )
}
export default NewExpense