import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        contactNumber: '',
        email: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
            </label>
            <label>
                Last Name:
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
            </label>
            <label>
                Contact Number:
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;

