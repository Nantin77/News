import { createContext, useContext, useState } from "react";

// Создаем сам контекст
const AuthContext = createContext(null);

// Кастомный хук для удобного доступа
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    // Замени функции внутри AuthProvider в файле AuthContext.jsx

const register = async (email, password) => {
    try {
        // ИСПОЛЬЗУЙ ЭТОТ URL (замени ID на свой актуальный)
        const response = await fetch('https://025b6c4a7c389b55.mokky.dev/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Ошибка регистрации');

        setToken(data.token);
        setUser(data.data);
        localStorage.setItem('token', data.token);
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

const login = async (email, password) => {
    try {
        // ИСПОЛЬЗУЙ ЭТОТ URL
        const response = await fetch('https://025b6c4a7c389b55.mokky.dev/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Ошибка входа');

        setToken(data.token);
        setUser(data.data);
        localStorage.setItem('token', data.token);
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};