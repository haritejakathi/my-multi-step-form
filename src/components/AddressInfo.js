import React from 'react';

const AddressInfo = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h3>Step 2: Address Information</h3>
      <div className="mb-3">
        <label>Address Line 1</label>
        <input
          type="text"
          className={`form-control ${errors.addressLine1 ? 'is-invalid' : ''}`}
          value={formData.addressLine1}
          onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
        />
        {errors.addressLine1 && <div className="invalid-feedback">{errors.addressLine1}</div>}
      </div>
      <div className="mb-3">
        <label>Address Line 2 (optional)</label>
        <input
          type="text"
          className="form-control"
          value={formData.addressLine2}
          onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label>City</label>
        <input
          type="text"
          className={`form-control ${errors.city ? 'is-invalid' : ''}`}
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
      </div>
      <div className="mb-3">
        <label>State</label>
        <input
          type="text"
          className={`form-control ${errors.state ? 'is-invalid' : ''}`}
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        />
        {errors.state && <div className="invalid-feedback">{errors.state}</div>}
      </div>
      <div className="mb-3">
        <label>Zip Code</label>
        <input
          type="text"
          className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
          value={formData.zipCode}
          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
        />
        {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
      </div>
    </div>
  );
};

export default AddressInfo;
