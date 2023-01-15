import React from 'react';
import Header from '../components/layouts/Header';
import 'font-awesome/css/font-awesome.min.css';
const LayoutDefault = ({ children }) => (
    <>
        <Header />
        <main className="main" style={{ height: "auto" }}>
            {children}
        </main>
    </>
);

export default LayoutDefault;  