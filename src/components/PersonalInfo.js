import React from 'react';

const PersonalInfo = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h3>Step 1: Personal Information</h3>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label>Phone</label>
        <input
          type="text"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>
    </div>
  );
};

export default PersonalInfo;
