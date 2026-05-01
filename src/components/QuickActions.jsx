

const QuickActions = () => {
  const actions = [
    { label: 'Add New FD', icon: '➕', action: 'add-fd' },
    { label: 'Add New Insurance', icon: '🛡️', action: 'add-insurance' },
    { label: 'Search Records', icon: '🔍', action: 'search' },
    { label: 'View History', icon: '📜', action: 'history' },
  ];

  const handleAction = (action) => {
    // Placeholder for navigation or action handling
    console.log(`Action: ${action}`);
  };

  return (
    <section className="quick-actions">
      <h2>Quick Actions</h2>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button key={index} className="action-btn" onClick={() => handleAction(action.action)}>
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;