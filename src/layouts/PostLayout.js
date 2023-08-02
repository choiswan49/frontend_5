import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const PostLayout = () => {
  return (
    <div>
        <nav>
            <NavLink to='/posts' end>posts</NavLink>
            <NavLink to='/posts/newpost'>글쓰기</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}

export default PostLayout