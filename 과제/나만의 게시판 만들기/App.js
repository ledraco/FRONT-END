import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import List from './pages/List'
import Detail from './pages/Detail'
import Post from './pages/Post'
import Modify from './pages/Modify'

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