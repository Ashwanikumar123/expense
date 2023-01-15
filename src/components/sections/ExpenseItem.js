import React, { useState } from "react"

const ExpenseItem = (props) => {

    const [title, setTitle ] = useState(props.expensesItem.name)

    const clickHandler = () => {
        setTitle('As you want to set')
    } 

    return (
        <li>
            <div className="row">
                <div className="col-8 f">
                    <i className="fab fa-aviato"></i>
                    <span className="spending-text">
                        <span className="heading">
                            {title}
                        </span>
                        <span className="sub">
                        {props.expensesItem.date} {props.expensesItem.day}
                        </span>
                    </span>
                </div>
                <div className="col-4 amt-right">
                    <span className="amount expense">
                        {props.expensesItem.amount}
                    </span>
                    <span onClick={clickHandler}>
                        <i className="fa fa-ellipsis-v"></i>
                    </span>
                </div>
            </div>
        </li>
    )
}

export default ExpenseItem