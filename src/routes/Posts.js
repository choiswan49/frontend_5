import React from 'react'
import './Posts.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';



const Posts = () => {
  const {
    setSearch, searchPost, isPostsLoading
  }=useContext(DataContext)

  return (
    <div>
      {
        isPostsLoading ? <div>loading...</div> 
        : <form onSubmit={e=>e.preventDefault}>
          <input type='text' 
                  id='search' 
                  onChange={(e)=>setSearch(e.target.value)}
                  autoComplete='off'
                  placeholder='검색어를 입력하세요'
          />
        </form>
      }
      {
        searchPost.length && <ul>
          {
          searchPost.map(post=>(
            <li key={post.title}>
              <span>id : {post.id}</span>
              <Link to={`/posts/${post.id}`}>
                <span>{post.title}</span>
              </Link>
              <span>{post.body}</span>
              <span>{post.datetime}</span>
            </li>
          ))
        }</ul>
      }
    </div>
  )
}

export default Posts