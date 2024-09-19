import React from 'react';

const Navigation = ({ step, handleNext, handleBack, handleSubmit }) => {
  return (
    <div className="mt-4">
      {step > 1 && (
        <button className="btn btn-secondary me-2" onClick={handleBack}>
          Back
        </button>
      )}
      {step < 3 ? (
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      ) : (
        <button className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
