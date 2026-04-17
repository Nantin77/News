import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from './PostCard';

function PostList() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    // Получаем текущую категорию из URL
    const location = useLocation();
    const currentCategory = new URLSearchParams(location.search).get('category');

    // Список всех категорий для фильтрации
    const categories = ["Футбол", "ММА", "Бокс", "Баскетбол"];

    useEffect(() => {
        setLoading(true);
        let url = 'https://025b6c4a7c389b55.mokky.dev/posts';
        
        // Если категория выбрана, добавляем её в запрос к API
        if (currentCategory) {
            url += `?category=${currentCategory}`;
        }
        
        axios.get(url)
            .then(res => {
                setNews(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [currentCategory]);

    return (
        <div className="container">
            {/* Блок категорий */}
            <div className="categories-nav">
                <button 
                    className={`category-chip ${!currentCategory ? 'active' : ''}`} 
                    onClick={() => navigate('/')}
                >
                    Все новости
                </button>
                
                {categories.map((cat) => (
                    <button 
                        key={cat}
                        className={`category-chip ${currentCategory === cat ? 'active' : ''}`} 
                        onClick={() => navigate(`?category=${cat}`)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Сетка новостей */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: '50px' }}>Загрузка...</div>
            ) : (
                <div className="news-list">
                    {news.length > 0 ? (
                        news.map(post => <PostCard key={post.id} post={post} />)
                    ) : (
                        <p style={{ textAlign: 'center', width: '100%' }}>В этой категории пока нет новостей.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default PostList;