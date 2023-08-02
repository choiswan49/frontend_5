import React, {useContext, useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import {
  Header,
  Logo,
  Footer,
  NavBar
} from './components/index'
import { AuthContext } from './contexts/AuthContext';
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';
import PostLayout from './layouts/PostLayout';

import  {
  Main,
  Coins,
  CoinDetail,
  Posts,
  PostDetail,
  NotFound,
  Login,
  NewPost
} from './routes'


const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
    <Header />
    <NavBar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/main' element={<Main />} />
      <Route path='/coins' element={<Coins />} />
      <Route path='/coins/:id' element={<CoinDetail />} />

      <Route path='/posts' 
              relative='path'
              element={<PostLayout />}>
        <Route index element={
          <Posts/>
        }/>
        <Route path=':id' element={<PostDetail/>} />
        <Route path='newpost' element={
          <NewPost/>} 
        />
      </Route>
      
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
