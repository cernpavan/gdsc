import React, { useState } from 'react';

const Services = () => {
  const [formData, setFormData] = useState({
    regNo: '',
    name: '',
    phoneNumber: '',
    scheduleFrom: '',
    scheduleTo: '',
    serviceType: '',
    status: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Service request submitted successfully!');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Hostel Services Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="regNo" className="form-label">Registration No:</label>
          <input
            type="text"
            id="regNo"
            name="regNo"
            className="form-control"
            value={formData.regNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Schedule Cleaning (Date & Time Range):</label>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="scheduleFrom" className="form-label">From:</label>
              <input
                type="datetime-local"
                id="scheduleFrom"
                name="scheduleFrom"
                className="form-control"
                value={formData.scheduleFrom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="scheduleTo" className="form-label">To:</label>
              <input
                type="datetime-local"
                id="scheduleTo"
                name="scheduleTo"
                className="form-control"
                value={formData.scheduleTo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label">Service Type:</label>
          <select
            id="serviceType"
            name="serviceType"
            className="form-select"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="cleaning">Room Cleaning</option>
            <option value="electricity">Electricity Complaint</option>
            <option value="pestControl">Pest Control</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status:</label>
          <select
            id="status"
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="">Select status</option>
            <option value="pending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Complaints/Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe any complaints or issues"
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default Services;
