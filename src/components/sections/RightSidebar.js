import ExpenseItem from "./ExpenseItem"

const RightSidebar = (props) => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 transaction-history">
            <div className="card shadow">
                <div className="card-header text-center">
                    <i className="fa fa-file-signature"></i> Your Transaction History
                </div>
                <div className="card-body">
                    <ul className="transaction-history-wrapper">
                        {
                            props.expensesList.map( (el, i) => {
                                return (
                                    <ExpenseItem key={i} expensesItem={el} />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="card-footer">
                    <div className="transaction-footer">
                        <div className="missing-transactions">
                            <i className="fa fa-money-check-alt"></i>
                            <span>
                                Missing Transactions
                            </span>
                        </div>
                        <button className="btn btn-outline-info">Add New</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar