import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div class="container mx-auto">
        <Header />
        <Body />
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/invoices/1111">Invoices 111</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
