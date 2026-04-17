import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../assets/style/style.css';

function PostDetailPage() {
    const { id } = useParams();
    const [news, setNews] = useState({});
    const [comments, setComments] = useState([]);
    const [text, setText] = useState("");

    const API_BASE = "https://025b6c4a7c389b55.mokky.dev";

    // Функция для получения комментариев
    const fetchComments = async () => {
        try {
            const res = await axios.get(`${API_BASE}/comments?postId=${id}`);
            setComments(res.data);
        } catch (err) {
            console.error("Ошибка загрузки комментариев:", err);
        }
    };

    useEffect(() => {
        // Загрузка основной новости
        axios.get(`${API_BASE}/posts/${id}`)
            .then(res => setNews(res.data))
            .catch(err => console.error("Ошибка загрузки поста:", err));
        
        fetchComments();
    }, [id]);

    const addComment = async () => {
        if (!text.trim()) return;

        try {
            await axios.post(`${API_BASE}/comments`, {
                postId: id,
                text: text,
                date: new Date().toLocaleDateString()
            });
            setText(""); // Очистить поле
            fetchComments(); // Обновить список
        } catch (err) {
            alert("Ошибка 404: Проверьте, создан ли ресурс 'comments' в Mokky!");
        }
    };

    if (!news.title) return <div className="container">Загрузка...</div>;

    return (
        <div className="container">
            <img src={news.image} alt="" className="detail-img" />
            <h1>{news.title}</h1>
            <p className="category-tag">{news.category} | {news.date}</p>
            <p>{news.description}</p>

            <div className="comments-section">
                <h3>Комментарии ({comments.length})</h3>
                <div className="comment-form">
                    <textarea 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Напишите комментарий..."
                    />
                    <button onClick={addComment}>Отправить</button>
                </div>

                <div className="comments-list">
                    {comments.map(c => (
                        <div key={c.id} className="comment-item">
                            <p>{c.text}</p>
                            <small>{c.date}</small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostDetailPage;