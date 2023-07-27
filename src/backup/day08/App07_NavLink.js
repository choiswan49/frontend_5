import React, {useState} from 'react'
// npm i react-router-dom
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
// import {Coins, Main, Posts, Login, NotFound} from './routes'
import Login from './routes/Login'


// style로 사용 가능
//  https://reactrouter.com/en/main/components/nav-link

import { NavLink } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null);
  const logoutHandle = ()=>{
    setUser(null)
  }

  const hStyle = {
    backgroundColor : 'yellow',
    color: 'orange',
    TextDecoration : 'underline'
  }
  return (
    <BrowserRouter>
    <Header user={user}/>
    <nav className='lnb'>
      <ul>
        <li>
          <NavLink to='/'
            style={({isActive})=>isActive ? hStyle : null}
          >main</NavLink>
        </li>
        <li>
          <NavLink to='/coins' 
            style={({isActive})=>isActive ? hStyle : null}
          >coins</NavLink>
          </li>
        <li><NavLink to='/posts' 
          style={({isActive})=>isActive ? hStyle : null}
        >게시판</NavLink></li>
        <li><NavLink to='/host' 
          style={({isActive})=>isActive ? hStyle : null}
        >host</NavLink></li>
    
        <li>
          {
            !user
            ? <NavLink to='/login' 
            style={({isActive})=>isActive ? hStyle : null}
            >Login</NavLink> 
            : <button onClick={logoutHandle}>LogOut</button>
          }
        </li>
      </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/coins' element={<Coins />}/>
        <Route path='/coins/:id' element={<CoinDetail />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/posts/:name' element={<PostDetail />}/>

        <Route path='/host' element={<HostLayout />}>
          <Route index element={<Host />} />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>

        <Route path='/login' element={<Login user={user} setUser={setUser} />}/>
        <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App

const Main = () => {
  return (
    <div>Main</div>
  )
}

const HostLayout = () =>{
  return(
    <>
    <ul className='subMenu'>
        <li><NavLink to='/host' className={({isActive})=>isActive ? 'hello' : ''} end>host</NavLink></li>
        <li><NavLink to='/host/income' className={({isActive})=>isActive ? 'hello' : ''}>income</NavLink></li>
        <li><NavLink to='/host/reviews' className={({isActive})=>isActive ? 'hello' : ''}>reviews</NavLink></li>
    </ul>
    <Outlet />
    </>
  )
}
const Host = () => {
  return (
    <div>Host dashboard</div>
  )
}
const Income = () => {
  return (
    <div>Host Income</div>
  )
}
const Reviews = () => {
  return (
    <div>Host Reviews</div>
  )
}

const Coins = () => {
  return (
    <div>Coins</div>
  )
}

const CoinDetail = () => {
  // const params = useParams();
  // console.log(JSON.stringify(params))

  const {id} = useParams();

  return (
    <div>CoinDetail {id} </div>
  )
}

const Posts = () => {
  return (
    <div>Posts</div>
  )
}

const PostDetail = () => {
  const params = useParams();
  console.log(JSON.stringify(params))
  return (
    <div>PostDetail {params.name}</div>
  )
}

const NotFound = () => {
  return (
    <div>NotFound</div>
  )
}