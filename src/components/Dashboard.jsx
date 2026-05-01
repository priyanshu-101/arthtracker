
import Header from './Header';
import SummaryCards from './SummaryCards';
import MaturityAlerts from './MaturityAlerts';
import QuickActions from './QuickActions';
import RecentActivity from './RecentActivity';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
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