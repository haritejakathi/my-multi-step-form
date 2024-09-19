import React from 'react';

const Confirmation = ({ formData }) => {
  return (
    <div>
      <h3>Step 3: Confirm Your Details</h3>
      <ul>
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone:</strong> {formData.phone}</li>
        <li><strong>Address Line 1:</strong> {formData.addressLine1}</li>
        <li><strong>Address Line 2:</strong> {formData.addressLine2}</li>
        <li><strong>City:</strong> {formData.city}</li>
        <li><strong>State:</strong> {formData.state}</li>
        <li><strong>Zip Code:</strong> {formData.zipCode}</li>
      </ul>
    </div>
  );
};

export default Confirmation;
