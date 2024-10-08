import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Employee Management</h1>
            <Link to="/">View Employees</Link>
            <Link to="/add-employee">Add Employee</Link>
        </nav>
    );
};

export default Navbar;
