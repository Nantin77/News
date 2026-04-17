import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Header() {
  const { token, logout } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo-container">
          <div className="logo-icon">M</div>
          <span className="site-name">Mokky<span>News</span></span>
        </Link>

        <nav>
          {token ? (
            <>
              <Link to="/favorites" className="header-btn login-link">Избранное</Link>
              <button onClick={logout} className="header-btn register-btn">Выйти</button>
            </>
          ) : (
            <>
              <Link to="/login" className="header-btn login-link">Войти</Link>
              <Link to="/register" className="header-btn register-btn">Регистрация</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
export default Header;