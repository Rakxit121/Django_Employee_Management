import axios from 'axios';
import React, { useState } from 'react';

const QualificationPopup = ({ employee, onClose }) => {
    const [qualificationData, setQualificationData] = useState({
        name: '',
        certificate_image: null,
        institution: '',
    });

    const handleChange = (e) => {
        if (e.target.name === 'certificate_image') {
            setQualificationData({ ...qualificationData, [e.target.name]: e.target.files[0] });
        } else {
            setQualificationData({ ...qualificationData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const [key, value] of Object.entries(qualificationData)) {
            formData.append(key, value);
        }

        try {
            await axios.post(`http://localhost:8000/api/qualifications/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onClose(); // Close the popup after submission
        } catch (error) {
            console.error("Error adding qualification:", error);
        }
    };

    return (
        <div className="popup">
            <h2>Add Qualification for {employee.name}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} placeholder="Qualification Name" required />
                <input type="file" name="certificate_image" onChange={handleChange} required />
                <input type="text" name="institution" onChange={handleChange} placeholder="Institution" required />
                <button type="submit">Add Qualification</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default QualificationPopup;
