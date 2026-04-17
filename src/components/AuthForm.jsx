import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router-dom";

function AuthForm({ mode = 'login' }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const { login, register } = useAuth();
    const isLogin = mode === 'login';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const action = isLogin ? login : register;
        const result = await action(email, password);
        if (result.success) {
            navigate('/');
        } else {
            setMsg(result.message);
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <h2 style={{ textAlign: 'center' }}>{isLogin ? 'Вход' : 'Регистрация'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input className="auth-input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <label>Пароль</label>
                    <input className="auth-input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button className="auth-submit-btn" style={{ width: '100%', padding: '12px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                        {isLogin ? 'Войти' : 'Создать аккаунт'}
                    </button>
                </form>
                {msg && <p style={{ color: 'red', textAlign: 'center' }}>{msg}</p>}
                <p style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-muted)' }}>
                    {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'} <Link to={isLogin ? '/register' : '/login'}>{isLogin ? 'Регистрация' : 'Войти'}</Link>
                </p>
            </div>
        </div>
    );
}
export default AuthForm;