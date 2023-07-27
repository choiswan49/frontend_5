import React, {useState} from 'react'
// npm i react-router-dom
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
// import {Coins, Main, Posts, Login, NotFound} from './routes'
import Login from './routes/Login'

import { NavLink,useNavigate,useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

/*
  현재 url 위치 정보 반환
  history 제어
  App 최상위 컴포넌트에서 사용 불가
*/

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
            state={{name:'kim', age:20}}
          >main</NavLink>
        </li>
        <li>
          <NavLink to='/coins' 
            style={({isActive})=>isActive ? hStyle : null}
          >coins</NavLink>
          </li>
        <li>
          <NavLink to='/users' 
            style={({isActive})=>isActive ? hStyle : null}
          >users</NavLink>
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

        <Route path='/users' element={<Users />}/>
        <Route path='/cusomters' element={<Customers />}/>


{/* layout 별도로 만들지 않고 Outlet을 직접 레이아웃으로 사용 */}
        <Route path='/coins' element={<Outlet />}>
          <Route index element={<Coins />}/>
          <Route path=':id' element={<CoinDetail />}/>
        </Route>
        
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

// useSearchParams
const Users=()=>{
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter')
  console.log(showActiveUsers)
  
  return(
    <div>
        <button onClick={()=>setSearchParams({filter:'active', name:'kim'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset Users</button>
        <button onClick={()=>console.log(searchParams.toString())}>searchParams</button>
    </div>
  )
}

const users = [
  {name: 'kim', type:'vip'},
  {name: 'lee', type:'silver'},
  {name: 'park', type:'vip'},
  {name: 'choi', type:'gold'}
]

const Customers = ()=>{
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('type')
  console.log(showActiveUsers)

  const [filter, setFilter] = useState(users);

  const filterHandle = (e)=>{
    e.preventDefault();
    const userfilter = users.filter(user=>user.type === showActiveUsers);
    setFilter(userfilter.length ? userfilter : users);
  }
  // useEffect(()=>{
  //   filterHandle()
  // },[filterHandle])
  return(
    <div>
      <ul>
        <li>
          <Link to='?type=vip' onClick={(e)=>filterHandle}>Vip</Link>
          <Link to='?type=silver'>Silver</Link>
          <Link to='?type=gold'>Gold</Link>
          <Link to='.'>Reset</Link>
        </li>
      </ul>
        {
          users.map(user=>(
            <div key={user.name}>
              <h3 style={{color:user.type === 'vip' ? 'red' : user.type === 'silver' ? 'yellow' : 'blue'}}
              >
                name : {user.name}
              </h3>
              <hr />
            </div>
          ))
        }
    </div>
  )
}

const Main = () => {
  const location = useLocation();
  console.log('location', location)
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
    <div>
      <ul>
        <li><Link to='/coins/1'>params 1</Link></li>
        <li><Link to='/coins/2'>params 2</Link></li>
        <li><Link to='/coins/3'>params 3</Link></li>
        <li><Link to='/coins/4'>params 4</Link></li>
      </ul>
    </div>
  )
}

const CoinDetail = () => {
  const {id} = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(()=>{
    // fetch()
    setCoin(id)
  }, [id])
  return (
    <div>
      <h2>CoinDetail {id}</h2>
      {
        coin ? (
          <div>
            코인 내용 출력
            {/* <Link to='/coins'>gotoBack</Link> */}
            <Link to='..'>gotoBack</Link>
          </div>
        ) : (
          <div>
            Loading...
          </div>
        )
      }
    </div>
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
  const navigate = useNavigate(); // hook
  return (
    <div>
        <h2>PostDetail {params.name}</h2>
        <button onClick={()=>navigate('/host' ,{state: {userid : 'choiswan'}})}>Host</button>
        <button onClick={()=>navigate(-1)}>gotoBack</button>
        <button onClick={()=>navigate(1)}>forword</button>
    </div>
  )
}

const NotFound = () => {
  return (
    <div>NotFound</div>
  )
}