import { Link } from "react-router-dom";

function PostCard({ post }) {
    return (
        // Добавлен слеш перед post/
        <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="post-card-container">
                <div className="posts">
                    <h1>{post.title}</h1>
                    <h2>{post.date}</h2>
                    <p>{post.category}</p>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;