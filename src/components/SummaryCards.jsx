
const SummaryCards = () => {
  const cards = [
    { title: 'Active FDs', value: 5, icon: '💰' },
    { title: 'Active Insurance', value: 3, icon: '🛡️' },
    { title: 'Matured Items', value: 2, icon: '✅' },
    { title: 'Renewals This Month', value: 1, icon: '🔄' },
  ];

  return (
    <section className="summary-cards">
      <h2>Portfolio Summary</h2>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-icon">{card.icon}</div>
            <div className="card-content">
              <h3>{card.value}</h3>
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummaryCards;