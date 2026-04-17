import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PostDetailPage from "./components/PostDetailPage";
import PostList from "./components/PostList";
import AuthForm from "./components/AuthForm";
import Favorites from "./components/Favorites";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<PostList/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/post/:id" element={<PostDetailPage/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/login" element={<AuthForm mode="login" />}/>
        <Route path="/register" element={<AuthForm mode="register" />}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;