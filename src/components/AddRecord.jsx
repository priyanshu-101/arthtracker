import React, { useState, useEffect } from 'react';
import './AddRecord.css';

const AddRecord = ({ onClose, onAddRecord }) => {
  const [type, setType] = useState(null);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (type === 'FD' && formData.principal && formData.interestRate && formData.startDate && formData.maturityDate) {
      const p = parseFloat(formData.principal);
      const r = parseFloat(formData.interestRate);
      const start = new Date(formData.startDate);
      const end = new Date(formData.maturityDate);

      if (p > 0 && r > 0 && end > start) {
        // Calculate difference in days
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const t = diffDays / 365;

        // Quarterly compounding: A = P * (1 + r/400)^(4*t)
        const amount = p * Math.pow((1 + r / 400), (4 * t));
        
        setFormData(prev => ({
          ...prev,
          maturityAmount: amount.toFixed(2)
        }));
      }
    }
  }, [type, formData.principal, formData.interestRate, formData.startDate, formData.maturityDate]);

  const fdFields = [
    { name: 'fdNumber', label: 'FD Number', type: 'text', placeholder: 'e.g., FD12345' },
    { name: 'bank', label: 'Bank / Issuer', type: 'text', placeholder: 'e.g., HDFC Bank' },
    { name: 'principal', label: 'Principal Amount', type: 'number', placeholder: 'e.g., 100000' },
    { name: 'interestRate', label: 'Interest Rate (%)', type: 'number', placeholder: 'e.g., 6.5', step: '0.01' },
    { name: 'startDate', label: 'Start Date', type: 'date' },
    { name: 'maturityDate', label: 'Maturity Date', type: 'date' },
    { name: 'maturityAmount', label: 'Maturity Amount', type: 'number', placeholder: 'Auto-calculated' },
  ];

  const insuranceFields = [
    { name: 'policyNumber', label: 'Policy Number', type: 'text', placeholder: 'e.g., POL67890' },
    { name: 'insurer', label: 'Insurer', type: 'text', placeholder: 'e.g., LIC' },
    { name: 'policyType', label: 'Policy Type', type: 'text', placeholder: 'e.g., Endowment' },
    { name: 'coverage', label: 'Coverage Amount', type: 'number', placeholder: 'e.g., 500000' },
    { name: 'premium', label: 'Premium Amount', type: 'number', placeholder: 'e.g., 5000' },
    { name: 'startDate', label: 'Start Date', type: 'date' },
    { name: 'maturityDate', label: 'Maturity / Renewal Date', type: 'date' },
  ];

  const fields = type === 'FD' ? fdFields : insuranceFields;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecord({
      type,
      ...formData,
      id: Date.now()
    });
    setSubmitted(true);
  };

  const handleAddAnother = () => {
    setType(null);
    setFormData({});
    setSubmitted(false);
  };

  if (!type && !submitted) {
    return (
      <div className="add-record-overlay">
        <div className="add-record-modal">
          <div className="modal-header">
            <h2>Add New Record</h2>
            <button className="close-btn" onClick={onClose}>&times;</button>
          </div>
          <div className="type-selector">
            <p className="type-label">Choose instrument type:</p>
            <div className="type-buttons">
              <button className="type-btn fd-btn" onClick={() => setType('FD')}>
                <span className="type-icon">💰</span>
                <span>Add FD</span>
              </button>
              <button className="type-btn insurance-btn" onClick={() => setType('Insurance')}>
                <span className="type-icon">🛡️</span>
                <span>Add Insurance</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="add-record-overlay">
        <div className="add-record-modal success-modal">
          <div className="success-content">
            <div className="success-icon">✅</div>
            <h2>Record Added Successfully!</h2>
            <p className="success-message">
              Your {type === 'FD' ? 'FD' : 'Insurance'} record has been saved.
            </p>
            <div className="record-summary">
              <p><strong>Type:</strong> {type}</p>
              <p><strong>Number:</strong> {formData.fdNumber || formData.policyNumber}</p>
              <p><strong>Issuer:</strong> {formData.bank || formData.insurer}</p>
            </div>
            <div className="success-actions">
              <button className="btn btn-primary" onClick={() => { onClose(); }}>
                View Details
              </button>
              <button className="btn btn-secondary" onClick={handleAddAnother}>
                Add Another
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="add-record-overlay">
      <div className="add-record-modal">
        <div className="modal-header">
          <h2>Add New {type === 'FD' ? 'FD' : 'Insurance'}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="add-record-form">
          <div className="form-grid">
            {fields.map(field => (
              <div key={field.name} className="form-group">
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  step={field.step || '1'}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}
          </div>
          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={() => setType(null)}>
              Back
            </button>
            <button type="submit" className="btn btn-primary">
              Save Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecord;
