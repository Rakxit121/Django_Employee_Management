import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QualificationPopup from './QualificationPopup';

const ViewEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/employees/');
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setShowPopup(true);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/employees/${id}/`);
            fetchEmployees();
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    return (
        <div>
            <h2>Employee List</h2>
            <input type="text" placeholder="Search by name" />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profile Pic</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Phone No.</th>
                        <th>Level</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td><img src={employee.profile_pic} alt={employee.name} width="50" /></td>
                            <td>{employee.name}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.phone_no}</td>
                            <td>{employee.level}</td>
                            <td>{employee.salary}</td>
                            <td>
                                <button onClick={() => handleEdit(employee)}>Edit</button>
                                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showPopup && <QualificationPopup employee={selectedEmployee} onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default ViewEmployees;
