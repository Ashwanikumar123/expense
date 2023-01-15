import React from "react";
import '../../assets/css/style.css'

const Header = () => {
    return (
        <header className="top-nav">
            <div className="logo-container">
                <div className="logo-icon">
                    <i className="fa fa-chart-line"></i>
                </div>
                <div className="logo-text">
                    <h2>InExpo</h2>
                </div>
            </div>
            <div className="nav-link-right">
                <ul>
                    <li className="w-768">
                        <a href="/">Need Help?</a>
                    </li>
                    <li className="w-768">
                        <a href="/">Read Our Blog</a>
                    </li>
                    <li>
                        <a href="/">Hi, Muni</a>
                    </li>
                    <li className="max-1200" id="navOpener">
                        <i className="fa fa-bars"></i>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header