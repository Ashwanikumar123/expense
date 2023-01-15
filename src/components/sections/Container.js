
import NewExpense from "./NewExpense";
import RightSidebar from "./RightSidebar"

const Container = (props) => {

    let expenseAmount = 0
    let incomeAmount  = 0
    props.expensesList.map( (expenseItem) => {
        return expenseAmount += expenseItem.amount
    })
    return (
        <div className="main-area container-fluid" style={{ height: 'auto !important' }}>
            <div className="row" style={{ height: 'auto !important' }}>
                <div className="col-sm-12 col-md-12 col-lg-8 main-area-content" style={{ height: 'auto !important', minHeight: '0px !important' }}>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="card shadow">
                                <div className="card-body">
                                    <div className="imp-info income-txt">
                                        <span className="info-text ">
                                            Income
                                        </span>
                                        <span className="info-amt bold">
                                            $ {incomeAmount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="card shadow">
                                <div className="card-body">
                                    <div className="imp-info expense-txt">
                                        <span className="info-text ">
                                            Expense
                                        </span>
                                        <span className="info-amt bold">
                                            $ {expenseAmount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NewExpense />
                </div>
                <RightSidebar expensesList = {props.expensesList}/>
            </div>
        </div>
    );
}

export default Container