import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {
  Header,
  Logo,
  Footer,
  NavBar
} from './components/index'
import { ThemeContext } from './contexts/ThemeContext';
import { AuthContext } from './contexts/AuthContext';

import  {
  Main,
  Coins,
  CoinDetail,
  Posts,
  PostDetail,
  NotFound,
  Login
} from './routes'

const App = () => {
  const {darkmode} = useContext(ThemeContext)
  return (
    <>
    <Header />
    <NavBar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/main' element={<Main />} />
      <Route path='/coins' element={<Coins />} />
      <Route path='/coins/coindetail' element={<CoinDetail />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/postdetail' element={<PostDetail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
