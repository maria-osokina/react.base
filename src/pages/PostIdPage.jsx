import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/loader/MyLoader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async(id) => {
        const response = await PostService.getById(id);
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async(id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
    return (
        <div>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading
                ? <MyLoader />
                : <div>{post.id} {post.title}</div>
            }
            <h2 style={{marginTop: 30}}>Комментарии</h2>
            {isComLoading
                ? <MyLoader />
                : <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                  </div>
            }
        </div>
    );
};

export default PostIdPage;