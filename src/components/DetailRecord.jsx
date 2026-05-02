

const DetailRecord = ({ record, onClose, onRenew }) => {
  const isFD = record.type === 'FD';
  
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const calculateDaysUntilMaturity = (maturityDate) => {
    if (!maturityDate) return 'N/A';
    const today = new Date();
    const maturity = new Date(maturityDate);
    const diffTime = maturity - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return `${Math.abs(diffDays)} days ago`;
    if (diffDays === 0) return 'Matures today';
    if (diffDays === 1) return 'Matures tomorrow';
    return `${diffDays} days remaining`;
  };

  const isMatured = record.maturityDate && new Date(record.maturityDate) < new Date();

  return (
    <div className="detail-record-overlay">
      <div className="detail-record-modal">
        <div className="detail-header">
          <div className="detail-title-section">
            <span className="detail-icon">{isFD ? '💰' : '🛡️'}</span>
            <div>
              <h2>{isFD ? 'FD Details' : 'Insurance Details'}</h2>
              <p className="detail-subtitle">{isFD ? record.fdNumber : record.policyNumber}</p>
            </div>
          </div>
          <button className="detail-close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="detail-content">
          {/* Key Information */}
          <section className="detail-section">
            <h3 className="section-title">Key Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Type</label>
                <p>{record.type}</p>
              </div>
              <div className="detail-item">
                <label>{isFD ? 'Bank / Issuer' : 'Insurer'}</label>
                <p>{isFD ? record.bank : record.insurer}</p>
              </div>
              {isFD && (
                <div className="detail-item">
                  <label>Principal Amount</label>
                  <p className="amount">₹{parseFloat(record.principal || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                </div>
              )}
              {!isFD && (
                <div className="detail-item">
                  <label>Coverage Amount</label>
                  <p className="amount">₹{parseFloat(record.coverage || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                </div>
              )}
              {isFD && (
                <div className="detail-item">
                  <label>Interest Rate</label>
                  <p>{record.interestRate}%</p>
                </div>
              )}
              {!isFD && (
                <div className="detail-item">
                  <label>Policy Type</label>
                  <p>{record.policyType}</p>
                </div>
              )}
            </div>
          </section>

          {/* Financial Details */}
          <section className="detail-section">
            <h3 className="section-title">Financial Details</h3>
            <div className="detail-grid">
              {isFD && (
                <div className="detail-item">
                  <label>Maturity Amount</label>
                  <p className="amount highlight">₹{parseFloat(record.maturityAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                </div>
              )}
              {!isFD && (
                <div className="detail-item">
                  <label>Premium Amount</label>
                  <p>₹{parseFloat(record.premium || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                </div>
              )}
              {isFD && (
                <div className="detail-item">
                  <label>Expected Gain</label>
                  <p className="gain">₹{(parseFloat(record.maturityAmount || 0) - parseFloat(record.principal || 0)).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                </div>
              )}
            </div>
          </section>

          {/* Date Information */}
          <section className="detail-section">
            <h3 className="section-title">Timeline</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Start Date</label>
                <p>{formatDate(record.startDate)}</p>
              </div>
              <div className="detail-item">
                <label>Maturity / Renewal Date</label>
                <p className={isMatured ? 'matured' : ''}>{formatDate(record.maturityDate)}</p>
              </div>
              <div className="detail-item">
                <label>Days Until Maturity</label>
                <p className={isMatured ? 'matured' : 'active'}>{calculateDaysUntilMaturity(record.maturityDate)}</p>
              </div>
            </div>
          </section>

          {/* Status Badge */}
          <div className="detail-status">
            {isMatured ? (
              <div className="status-badge matured-badge">
                ⏰ Already Matured
              </div>
            ) : (
              <div className="status-badge active-badge">
                ✓ Active
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="detail-actions">
          {isMatured && (
            <button className="btn btn-primary" onClick={() => onRenew(record)}>
              Renew {isFD ? 'FD' : 'Policy'}
            </button>
          )}
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailRecord;
