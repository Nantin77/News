import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Импортируем хук
import nav from '../assets/images/menu-btn.svg';
import '../assets/style/style.css';

function Header() {
  const { token, logout } = useAuth(); // Проверяем, вошел ли пользователь

  return (
    <div className="header">
      <nav className="header-nav">
        <Link to="/">
          <img src={nav} alt="Home" />
        </Link>
      </nav>

      <div className="auth-buttons">
        {token ? (
          // Если токен есть — показываем кнопку выхода
          <button onClick={logout} className="header-btn">Выйти</button>
        ) : (
          // Если токена нет — ссылки на вход и регистрацию
          <>
            <Link to="/login" className="header-btn">Войти</Link>
            <Link to="/register" className="header-btn">Регистрация</Link>
          </>
        )}
      </div>
    </div>
  );
}
export default Header;