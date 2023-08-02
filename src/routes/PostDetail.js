import React from 'react'
import './PostDetail.css'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { DataContext } from '../contexts/DataContext';
import { useContext } from 'react';
import { format } from 'date-fns';

const PostDetail = () => {
  const {posts, setPosts, onDeleteHandle, 
        updatePost, setUpdatePost,
        postTitle, setPostTitle,
        postBody, setPostBody
  } = useContext(DataContext)
  const {id} = useParams();
  const [findPost, setFindPost] = useState(null);
  const navigate = useNavigate(); // 컴포넌트 내의 함수에서 라우터에 접근

  const updateHandle = ()=>{
    updateTitleRef.current.focus();
    setUpdatePost(!updatePost);
    setPostTitle(postTitle);
    setPostBody(postBody);
    console.log(updatePost)

    setUpdatePost(!updatePost);

    const newPost = {
      id, 
      title : postTitle, 
      body : postBody, 
      datetime : format(new Date(), 'yyyy-MM-dd')
    }
    const filter = posts.filter(post=>Number(post.id) !== Number(id));
    const allPosts = [...filter, newPost]

    const sortPosts = allPosts.sort((prev, next)=>next.id - prev.id)
    setPosts(sortPosts);
  }

  useEffect(()=>{
    const find = posts.find(post=>Number(post.id) === Number(id));
    if (!find) return navigate('posts')
    // console.log('find', find)
    setFindPost(find);
    setPostTitle(find.title)
    setPostBody(find.body)
  }, [])

  const updateTitleRef = useRef();
  
  return (
    <div>
      <h3>PostDetail {id}</h3>
      {/* <h4>{findPost && findPost.title}</h4>
      <p>{findPost && findPost.body}</p> */}
      <input type='text'
              value={postTitle}
              readOnly={updatePost}
              ref={updateTitleRef}
              onChange={(e)=>setPostTitle(e.target.value)}
      />
      <textarea value={postBody}  
                readOnly={!updatePost ? findPost?.postBody :postBody}      
                onChange={(e)=>setPostBody(e.target.value)}
      />

      {/* <Link to='/posts'>뒤로 가기</Link> */}
      <button onClick={()=>navigate('/posts')}>뒤로 가기</button>
      <div>
        {
          updatePost ? 
          <button onClick={updateHandle}>수정</button> 
          : <button onClick={()=>setUpdatePost(!updatePost)}>완료</button>
        }
      </div>
      <button onClick={()=>onDeleteHandle(id)}>삭제</button>

    </div>
  )
}

export default PostDetail