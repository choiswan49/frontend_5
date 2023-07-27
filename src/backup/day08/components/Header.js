import React from 'react'

const Header = ({user}) => {
  return (
    <div>
        <h1>LOGO</h1>
        <div>
          {
            user ? `${user.name}님 어서오세요`: null
          }
        </div>
    </div>
  )
}

export default Header