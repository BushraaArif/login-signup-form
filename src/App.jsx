import React, { useState } from 'react';
import "./App.css"



function JobApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    resume: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setFormData((prevFormData) => ({...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Job Application Form</h2>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Job Title:
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Resume:
        <input type="file" name="resume" onChange={(event) => setFormData((prevFormData) => ({...prevFormData, resume: event.target.files[0] }))} />
      </label>
      <br />
      <button type="submit">Submit Application</button>
    </form>
  );
}

export default JobApplicationForm;