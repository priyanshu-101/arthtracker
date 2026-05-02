
import { useEffect, useState } from 'react';
import Header from './Header';
import SummaryCards from './SummaryCards';
import MaturityAlerts from './MaturityAlerts';
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';
import AddRecord from './AddRecord';
import DetailRecord from './DetailRecord';
import './Dashboard.css';

const Dashboard = () => {
  const [theme, setTheme] = useState('light');
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('arthtracker-theme');
    const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferredTheme);

    // Load records from localStorage
    const savedRecords = localStorage.getItem('arthtracker-records');
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords));
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('arthtracker-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('arthtracker-records', JSON.stringify(records));
  }, [records]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleAddRecord = (newRecord) => {
    setRecords(prev => [newRecord, ...prev]);
    setShowAddRecord(false);
  };

  const handleSelectRecord = (record) => {
    setSelectedRecord(record);
  };

  const handleRenewRecord = (record) => {
    console.log('Renewing record:', record);
    // Logic for renewal would go here
    setSelectedRecord(null);
  };

  return (
    <div className="dashboard">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="dashboard-main">
        <SummaryCards records={records} />
        <MaturityAlerts records={records} onSelectRecord={handleSelectRecord} />
        <QuickActions onAddFD={() => setShowAddRecord(true)} onAddInsurance={() => setShowAddRecord(true)} />
        <RecentActivity records={records} onSelectRecord={handleSelectRecord} />
      </main>
      
      {showAddRecord && (
        <AddRecord 
          onClose={() => setShowAddRecord(false)} 
          onAddRecord={handleAddRecord}
        />
      )}

      {selectedRecord && (
        <DetailRecord 
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
          onRenew={handleRenewRecord}
        />
      )}
    </div>
  );
};

export default Dashboard;