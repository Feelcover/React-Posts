import React, { useEffect, useState } from "react";
// import ClassCounter from './components/ClassCounter';
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import "./styles/App.css";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [isPostsLoading, setIsPostsLoading] = useState (false);

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    setIsPostsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts)
    setIsPostsLoading(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Counter />
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <div className="createposts">Создать пост</div>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading
          ? <Loader/>
          : <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Список постов"}
        />
      }
      
    </div>
  );
}

export default App;
