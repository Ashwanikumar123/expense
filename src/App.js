import LayoutDefault from "./layout/LayoutDefault";
import SidebarMenu from "./components/sections/SidebarMenu";
import Container from "./components/sections/Container";

function App() {

    const dateString = (date) => {
        const dates = new Date(date);  // 2009-11-10
        const day = dates.toLocaleString('default', { day: '2-digit' })
        const month = dates.toLocaleString('default', { month: 'short' });
        const year = dates.toLocaleString('default', { year: 'numeric' });
        return day+' '+month+' '+year;
    }
    
    const expensesLists = [
        {
            'name'      : 'Burger King',
            'date'      : dateString('2023-01-02'),
            'day'       : 'Monday',
            'amount'    : 500 
        },
        {
            'name'      : 'Pizza',
            'date'      : dateString('2023-01-04'), 
            'day'       : 'Tuesday',
            'amount'    : 1050 
        },
        {
            'name'      : 'fat food',
            'date'      : dateString('2023-01-08'), 
            'day'       : 'Wednesday',
            'amount'    : 125
        },
        {
            'name'      : 'Milk Products',
            'date'      : dateString('2023-01-09'), 
            'day'       : 'Monday',
            'amount'    : 65
        },
        {
            'name'      : 'Maggi',
            'date'      : dateString('2023-01-13'), 
            'day'       : 'Saturday',
            'amount'    : 31
        },
    ]

    return (
        <LayoutDefault>
            <SidebarMenu />
            <Container expensesList = {expensesLists}/>
        </LayoutDefault>
    );
}

export default App;
