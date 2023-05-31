import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <h1 style={{textAlign: "center", marginTop: 15}}>Посты еще не написали!</h1>
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostItem post={post} remove={remove} />
                    </CSSTransition>
                )
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;