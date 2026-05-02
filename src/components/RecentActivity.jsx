
const RecentActivity = ({ records = [], onSelectRecord }) => {
  // If no records, show some default activity or empty state
  const displayRecords = records.length > 0 
    ? records.slice(0, 5) 
    : [
        { type: 'FD', fdNumber: 'FD12345', bank: 'HDFC Bank', startDate: '2026-04-28', isDefault: true },
        { type: 'Insurance', policyNumber: 'POL67890', insurer: 'LIC', startDate: '2026-04-25', isDefault: true },
      ];

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <section className="recent-activity">
      <h2>Recent Records</h2>
      <ul className="activity-list">
        {displayRecords.map((record, index) => (
          <li 
            key={record.id || index} 
            className={`activity-item ${record.isDefault ? 'default-item' : 'clickable-item'}`}
            onClick={() => !record.isDefault && onSelectRecord(record)}
            style={{ cursor: record.isDefault ? 'default' : 'pointer' }}
          >
            <div className="activity-main">
              <span className="activity-type">{record.type}</span>
              <span className="activity-name">
                {record.type === 'FD' ? (record.fdNumber || 'No Number') : (record.policyNumber || 'No Number')}
                <small className="activity-issuer"> • {record.type === 'FD' ? record.bank : record.insurer}</small>
              </span>
            </div>
            <span className="activity-date">{formatDate(record.startDate)}</span>
          </li>
        ))}
      </ul>
      {records.length === 0 && (
        <p className="empty-state">No records added yet. Use "Quick Actions" to add your first record.</p>
      )}
    </section>
  );
};

export default RecentActivity;