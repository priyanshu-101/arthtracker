
import { useEffect, useState } from 'react';
import Header from './Header';
import SummaryCards from './SummaryCards';
import MaturityAlerts from './MaturityAlerts';
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';
import './Dashboard.css';

const Dashboard = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('arthtracker-theme');
    const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('arthtracker-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="dashboard">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="dashboard-main">
        <SummaryCards />
        <MaturityAlerts />
        <QuickActions />
        <RecentActivity />
      </main>
    </div>
  );
};

export default Dashboard;