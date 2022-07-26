import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import List from './pages/List/List'
import Detail from './pages/Detail/Detail'
import Post from './pages/Post/Post'
import Modify from './pages/Modify/Modify'

const App = () => {
  return (
    <Routes>
      <Route path = "/" element = {<List/>}/>
      <Route path = "/Detail" element = {<Detail/>}/>
      <Route path = "/Post" element = {<Post/>}/>
      <Route path = "/Modify" element = {<Modify/>}/>
    </Routes>      
  );
};

export default App;