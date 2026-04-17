import { useState } from "react";
import { useAuth } from "./AuthContext"; // Убедись, что путь правильный
import { useNavigate } from "react-router-dom";

function AuthForm({ mode = 'login' }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

   
    const navigate=useNavigate();
    const { login, register } = useAuth();

    const isLogin = mode === 'login';
    const title = isLogin ? 'Войти в аккаунт' : 'Создать новый аккаунт';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Загрузка...');

        const action = isLogin ? login : register;
        const result = await action(email, password);

        if (result.success) {
            setMessage(`Успешно! Вы ${isLogin ? 'вошли' : 'зарегистрированы'}`);
            if(isLogin==true){
                navigate('/');
            }
            else {
                navigate('/login');
            }

        } else {
            setMessage(`Ошибка: ${result.message || 'Что-то пошло не так'}`);
        }
    };

    return (
        <div className="auth-container">
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Электронная почта</label>
                    <input 
                        type="email" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Пароль</label>
                    <input 
                        type="password" 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default AuthForm;