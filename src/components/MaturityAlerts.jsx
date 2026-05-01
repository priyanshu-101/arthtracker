

const MaturityAlerts = () => {
  const maturingSoon = [
    { id: 1, type: 'FD', number: 'FD12345', maturityDate: '2026-05-15', bank: 'Bank A' },
    { id: 2, type: 'Insurance', number: 'POL67890', maturityDate: '2026-05-20', insurer: 'Insurer B' },
  ];

  const matured = [
    { id: 3, type: 'FD', number: 'FD11111', maturityDate: '2026-04-30', bank: 'Bank C' },
  ];

  return (
    <section className="maturity-alerts">
      <h2>Maturity Alerts</h2>
      <div className="alerts-container">
        <div className="alert-section">
          <h3>Maturing Soon</h3>
          <ul className="alert-list">
            {maturingSoon.map(item => (
              <li key={item.id} className="alert-item">
                <div className="item-info">
                  <span className="item-type">{item.type}</span>
                  <span className="item-number">{item.number}</span>
                  <span className="item-date">{item.maturityDate}</span>
                  <span className="item-provider">{item.bank || item.insurer}</span>
                </div>
                <button className="btn-renew">Renew</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="alert-section">
          <h3>Already Matured</h3>
          <ul className="alert-list">
            {matured.map(item => (
              <li key={item.id} className="alert-item">
                <div className="item-info">
                  <span className="item-type">{item.type}</span>
                  <span className="item-number">{item.number}</span>
                  <span className="item-date">{item.maturityDate}</span>
                  <span className="item-provider">{item.bank || item.insurer}</span>
                </div>
                <button className="btn-renew">Renew</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MaturityAlerts;