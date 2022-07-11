import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <div className="postsclear">Список постов пуст!</div>;
  }

  return (
    <div>
      <h1 className="spisok">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition classNames="postClass" key={post.id} timeout={200}>
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
