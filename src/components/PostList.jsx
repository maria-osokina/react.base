import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <h1 style={{textAlign: "center", marginTop: 15}}>Посты еще не написали!</h1>
    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem
                    post={post}
                    number={index + 1}
                    key={post.id}
                    remove={remove}
                />)}
        </div>
    );
};

export default PostList;