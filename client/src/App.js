import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Posts from './pages/PostsPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts/:id" element={<PostPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
