import React from "react"

const SidebarMenu = () => {
    return (
        <aside className="main-sidebar-nav">
            <ul className="wrapper">
                <li className="active">
                    <a href="/">
                        <i className="fa fa-columns"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="fa fa-file-invoice-dollar"></i>
                        <span>Bills &amp; Payments</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="fa fa-chart-bar"></i>
                        <span>Expenses</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="fa fa-cog"></i>
                        <span>Settings</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="fa fa-hands-helping"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default SidebarMenu
