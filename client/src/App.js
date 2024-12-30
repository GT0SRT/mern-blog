import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import IndexPage from './components/IndexPage';
import { UserContextProvider } from "./components/UserContext";
import CreatePost from './components/CreatePost';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
