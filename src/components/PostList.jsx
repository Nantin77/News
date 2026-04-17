import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from './PostCard';

function PostList() {
    const [news, setNews] = useState([]);
    const navigate = useNavigate();
    const currentCategory = new URLSearchParams(useLocation().search).get('category');

    useEffect(() => {
        let url = 'https://025b6c4a7c389b55.mokky.dev/posts';
        if (currentCategory) url += `?category=${currentCategory}`;
        
        axios.get(url)
            .then(res => setNews(res.data))
            .catch(err => console.log(err));
    }, [currentCategory]);

    return (
        <div className="container">
            <div className="filter-buttons">
                <button onClick={() => navigate('/')}>Все</button>
                <button onClick={() => navigate('?category=Футбол')}>Футбол</button>
                <button onClick={() => navigate('?category=ММА')}>ММА</button>
            </div>
            <div className="news-list">
                {news.map(post => <PostCard key={post.id} post={post} />)}
            </div>
        </div>
    );
}

export default PostList;