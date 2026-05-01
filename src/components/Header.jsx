
const Header = () => {
  return (
    <header className="header">
      <h1 className="app-title">ArthTracker</h1>
      <div className="header-right">
        <span className="user-name">Welcome, User</span>
        <div className="notification-icon">🔔</div>
        <div className="profile-icon">👤</div>
      </div>
    </header>
  );
};

export default Header;