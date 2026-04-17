import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div>
            <h4 style={{ color: 'white' }}>О нас</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Лучшие новости спорта и технологий на одном портале.</p>
          </div>
          <div>
            <h4 style={{ color: 'white' }}>Разделы</h4>
            <Link to="/" style={{ color: '#94a3b8', display: 'block', textDecoration: 'none' }}>Главная</Link>
            <Link to="/favorites" style={{ color: '#94a3b8', display: 'block', textDecoration: 'none' }}>Избранное</Link>
          </div>
          <div>
            <h4 style={{ color: 'white' }}>Контакты</h4>
            <a href="https://t.me/news" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', textDecoration: 'none' }}>Telegram</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Mokky News. Работает на React.
        </div>
      </div>
    </footer>
  );
}
export default Footer;