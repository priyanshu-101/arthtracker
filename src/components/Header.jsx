
const Header = ({ theme, onToggleTheme }) => {
  return (
    <header className="header">
      <div>
        <h1 className="app-title">ArthTracker</h1>
        <p className="subtitle">Portfolio & maturity dashboard</p>
      </div>
      <div className="header-right">
        <span className="user-name">Welcome, User</span>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
        <div className="notification-icon">🔔</div>
        <div className="profile-icon">👤</div>
      </div>
    </header>
  );
};

export default Header;