

const QuickActions = ({ onAddFD, onAddInsurance }) => {
  const actions = [
    { label: 'Add New FD', icon: '➕', action: 'add-fd', handler: onAddFD },
    { label: 'Add New Insurance', icon: '🛡️', action: 'add-insurance', handler: onAddInsurance },
    { label: 'Search Records', icon: '🔍', action: 'search', handler: () => console.log('Search') },
    { label: 'View History', icon: '📜', action: 'history', handler: () => console.log('History') },
  ];

  const handleAction = (handler) => {
    if (handler) {
      handler();
    }
  };

  return (
    <section className="quick-actions">
      <h2>Quick Actions</h2>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button key={index} className="action-btn" onClick={() => handleAction(action.handler)}>
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;