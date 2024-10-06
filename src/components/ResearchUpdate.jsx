import React, { useState } from 'react';

const ResearchUpdate = () => {
    const [formData, setFormData] = useState({
        status: '',
        endDate: '',
        reasonWhy: '',
        fileUpload: null,
        password: '',
    });

    const [filePreview, setFilePreview] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            fileUpload: file,
        }));

        // Preview the file if it's an image or a PDF
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setFilePreview(fileURL);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Update Research Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select
                        className="form-select"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select status</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Show Reason Why textarea only if endDate is entered */}
                {formData.endDate && (
                    <div className="mb-3">
                        <label htmlFor="reasonWhy" className="form-label">Reason Why</label>
                        <textarea
                            className="form-control"
                            id="reasonWhy"
                            name="reasonWhy"
                            rows="3"
                            value={formData.reasonWhy}
                            onChange={handleChange}
                        />
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="fileUpload" className="form-label">File Upload</label>
                    <input
                        type="file"
                        className="form-control"
                        id="fileUpload"
                        name="fileUpload"
                        onChange={handleFileChange}
                        required
                    />
                    {filePreview && (
                        <div className="mt-2">
                            <strong>File Preview:</strong>
                            {formData.fileUpload.type.startsWith('image/') ? (
                                <img
                                    src={filePreview}
                                    alt="File Preview"
                                    className="img-thumbnail mt-2"
                                    style={{ maxHeight: '200px', maxWidth: '100%' }}
                                />
                            ) : (
                                <a href={filePreview} target="_blank" rel="noopener noreferrer" className="btn btn-link mt-2">
                                    Open PDF
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ResearchUpdate;
