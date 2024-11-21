import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const RegisterFranchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    state: '',
    city: '',
    refBy: '',
    uplineId: '',

  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://shadi-mahotsav-backend.vercel.app/api/franchise/register', formData); // Replace with your backend endpoint
      setSuccessMessage('Franchise registered successfully!');
      setErrorMessage('');
      setFormData({
        name: '',
        mobileNumber: '',
        state: '',
        city: '',
        refBy: '',
        uplineId: '',
      });
    } catch (error) {
      console.error('Error registering franchise:', error);
      setErrorMessage('Failed to register franchise. Please try again.');
    }
  };

  return (
    <div className="container mt-5" style={{width:'500px'}}>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h4>Register Franchise</h4>
            </div>
            <div className="card-body">
              {successMessage && (
                <div className="alert alert-success text-center">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="alert alert-danger text-center">{errorMessage}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter franchise name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mobile Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="mobileNumber"
                    placeholder="Enter mobile number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    // required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                    // required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    // required
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Referred By (Franchise ID)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="refBy"
                    placeholder="Enter referring franchise ID"
                    value={formData.refBy}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Upline By</label>
                  <input
                    type="text"
                    className="form-control"
                    name="uplineId"
                    placeholder="Enter uplineId"
                    value={formData.uplineId}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFranchise;
