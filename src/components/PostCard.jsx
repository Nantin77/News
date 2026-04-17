import { Link } from "react-router-dom";

function PostCard({ post }) {
    return (
        <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="post-card">
                <div className="post-img-wrapper">
                    <img 
                        src={post.image || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop'} 
                        alt={post.title} 
                    />
                </div>
                <div className="post-content">
                    <span className="badge">{post.category}</span>
                    <h3 className="post-title">{post.title}</h3>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{post.date}</div>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;