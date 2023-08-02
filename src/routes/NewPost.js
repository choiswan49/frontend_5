import React, { useState, useContext } from 'react'
import {format} from 'date-fns'
import { DataContext } from '../contexts/DataContext'

const NewPost = () => {
  const {posts, setPosts, postTitle, setPostTitle, postBody, setPostBody, onSubmit} = useContext(DataContext)
    
    
  return (
    <div className='NewPost'>
        <h2>문의하기</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor='postTitle'>제목</label>
            <input id='postTitle'
                    type='text'
                    value={postTitle}        
                    onChange={(e)=>setPostTitle(e.target.value)}
                    autoComplete='off'
            />
            <label htmlFor='postBody'>내용</label>
            <textarea id='postBody'
                    required
                    value={postBody}        
                    onChange={(e)=>setPostBody(e.target.value)}
            />
            <button type='submit'>문의</button>
        </form>
    </div>
  )
}

export default NewPost