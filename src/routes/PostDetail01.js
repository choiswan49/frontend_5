import React from 'react'
import './PostDetail.css'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { DataContext } from '../contexts/DataContext';
import { useContext } from 'react';

const PostDetail = () => {
  const {posts, onDeleteHandle} = useContext(DataContext)
  const {id} = useParams();
  const [findPost, setFindPost] = useState(null);
  const navigate = useNavigate(); // 컴포넌트 내의 함수에서 라우터에 접근

  useEffect(()=>{
    const find = posts.find(post=>Number(post.id) === Number(id));
    // console.log('find', find)
    setFindPost(find);
  }, [])
  
  return (
    <div>
      <h3>PostDetail {id}</h3>
      <h4>{findPost && findPost.title}</h4>
      <p>{findPost && findPost.body}</p>

      {/* <Link to='/posts'>뒤로 가기</Link> */}
      <button onClick={()=>navigate('/posts')}>뒤로 가기</button>
      <button onClick={()=>navigate('/posts')}>수정</button>
      <button onClick={()=>onDeleteHandle(id)}>삭제</button>

    </div>
  )
}

export default PostDetail