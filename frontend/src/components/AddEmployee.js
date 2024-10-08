import axios from 'axios';
import React, { useState } from 'react';

const AddEmployee = () => {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        gender: '',
        address: '',
        phone_no: '',
        level: '',
        salary: '',
        qualifications: [],
        status: '',
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profile_pic', file);
        for (const [key, value] of Object.entries(employeeData)) {
            formData.append(key, value);
        }

        try {
            await axios.post('http://localhost:8000/api/employees/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            console.error("Error adding employee:", error);
        }
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} placeholder="Name" />
                <input type="text" name="gender" onChange={handleChange} placeholder="Gender" />
                <input type="text" name="address" onChange={handleChange} placeholder="Address" />
                <input type="text" name="phone_no" onChange={handleChange} placeholder="Phone No." />
                <input type="number" name="level" onChange={handleChange} placeholder="Level (1-4)" />
                <input type="number" name="salary" onChange={handleChange} placeholder="Salary" />
                <input type="text" name="status" onChange={handleChange} placeholder="Status" />
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
