import { useState } from 'react';
import PostCard from './PostCard';

function Favorites() {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites') || '[]'));

    const removeFavorite = (post) => {
        const updated = favorites.filter(f => f.id !== post.id);
        setFavorites(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));
    };

    return (
        <div className="container">
            <h1>Ваше избранное</h1>
            {favorites.length > 0 ? (
                favorites.map(post => <PostCard key={post.id} post={post} isFavorite={true} onToggleFavorite={removeFavorite} />)
            ) : <p>Тут пока ничего нет...</p>}
        </div>
    );
}
export default Favorites;