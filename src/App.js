import React, {useRef, useState, useMemo} from 'react';
// import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css'
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Ancient', body: "apparition"},
    {id: 2, title: 'Keeper', body: "OfTheLight"},
    {id: 3, title: 'Faceless', body: "Void"}
  ])

  
const [filter, setFilter] = useState({sort: '', query: ''})

const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}


const sortedPosts = useMemo(() => {
  console.log('Функция getSortedPosts работает')
  if(filter.sort) {
    return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
  } 
  return posts
} , [filter.sort, posts])

const sortedAndSearchedPosts = useMemo(() => {
return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
}, [filter.query, sortedPosts])


  return (
    <div className="App">
      <Counter/>
      <div className='createposts'>Создать пост</div>
    <PostForm create={createPost}/>
    <hr style={{margin: '15px 0'}}/>
    <PostFilter
      filter={filter}
      setFilter={setFilter}
    />
    {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
        : <div className='postsclear'>Список постов пуст!</div>
    }
    </div> 
  );
}

export default App;
