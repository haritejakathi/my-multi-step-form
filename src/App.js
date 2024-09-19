import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';
import Navigation from './components/Navigation';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [errors, setErrors] = useState({});

  // Load form data from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Save form data to localStorage on update
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const validateStep = (currentStep) => {
    let tempErrors = {};
    if (currentStep === 1) {
      if (!formData.name) tempErrors.name = 'Name is required';
      if (!formData.email) tempErrors.email = 'Email is required';
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) tempErrors.email = 'Email is invalid';
      if (!formData.phone) tempErrors.phone = 'Phone is required';
    } else if (currentStep === 2) {
      if (!formData.addressLine1) tempErrors.addressLine1 = 'Address Line 1 is required';
      if (!formData.city) tempErrors.city = 'City is required';
      if (!formData.state) tempErrors.state = 'State is required';
      if (!formData.zipCode) tempErrors.zipCode = 'Zip Code is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    localStorage.removeItem('formData');
  };

  return (
    <div className="container mt-5">
      <h2>Multi-Step Form</h2>
      {step === 1 && <PersonalInfo formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 2 && <AddressInfo formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 3 && <Confirmation formData={formData} />}
      <Navigation step={step} handleNext={handleNext} handleBack={handleBack} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
