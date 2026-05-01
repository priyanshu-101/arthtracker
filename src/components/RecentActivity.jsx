
const RecentActivity = () => {
  const activities = [
    { type: 'added', item: 'FD FD12345', date: '2026-04-28' },
    { type: 'renewed', item: 'Insurance POL67890', date: '2026-04-25' },
    { type: 'searched', item: 'Maturity in May', date: '2026-04-20' },
  ];

  return (
    <section className="recent-activity">
      <h2>Recent Activity</h2>
      <ul className="activity-list">
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <span className="activity-type">{activity.type}</span>
            <span className="activity-item">{activity.item}</span>
            <span className="activity-date">{activity.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentActivity;