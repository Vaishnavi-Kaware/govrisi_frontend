// IPRForm.js
import React, { useState } from 'react';

const IPRForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        applicantName: '',
        description: '',
        status: '',
        applicationNumber: '', // Fixed typo here
        applicationDate: '',
        publicationDate: '',
        email: '',
        inventors: [{ name: '', email: ''}],
      });
      
  const [certificateFile, setCertificateFile] = useState(null);
  const [inventionFile, setInventionFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInventorChange = (index, field, value) => {
    const updatedInventors = [...formData.inventors];
    updatedInventors[index][field] = value;
    setFormData({ ...formData, inventors: updatedInventors });
  };

  const addInventor = () => {
    setFormData({ ...formData, inventors: [...formData.inventors, { name: '', email: ''}] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    
    // Append IPR data and files to FormData
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        form.append(key, JSON.stringify(formData[key])); // Keep inventors as JSON
      } else {
        form.append(key, formData[key]); // Append as-is for other fields
      }
    });
    if (certificateFile) form.append('certificateFile', certificateFile);
    if (inventionFile) form.append('inventionFile', inventionFile);
  
    try {
      const response = await fetch('http://localhost:4000/ipr/addIPR', {
        method: 'POST',
        body: form,
      });
      if (!response.ok) throw new Error('Failed to submit IPR form1');
      alert('IPR data submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form2.');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="text" name="title" placeholder="Title" onChange={handleInputChange} required />
      <input type="text" name="applicantName" placeholder="Applicant Name" onChange={handleInputChange} required />
      <textarea name="description" placeholder="Description" onChange={handleInputChange} required />
      <input type="text" name="status" placeholder="Status" onChange={handleInputChange} required />
      <input type="text" name="applicationNumber" placeholder="Application Number" onChange={handleInputChange} required />
      <input type="date" name="applicationDate" onChange={handleInputChange} required />
      <input type="date" name="publicationDate" onChange={handleInputChange} required />
      <input type="email" name="email" placeholder="Applicant Email" onChange={handleInputChange} required />

      {formData.inventors.map((inventor, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Inventor Name"
            value={inventor.name}
            onChange={(e) => handleInventorChange(index, 'name', e.target.value)}
          />
          <input
            type="email"
            placeholder="Inventor Email"
            value={inventor.email}
            onChange={(e) => handleInventorChange(index, 'email', e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={addInventor}>Add Inventor</button>

      <input type="file" onChange={(e) => setCertificateFile(e.target.files[0])} />
      <input type="file" onChange={(e) => setInventionFile(e.target.files[0])} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default IPRForm;
