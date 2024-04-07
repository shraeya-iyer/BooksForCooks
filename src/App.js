import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import MyCookbook from './routes/MyCookbook'
import MyLiked from './routes/MyLiked'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/myCookbook' element={<MyCookbook />} />
        <Route path='/myLiked' element={<MyLiked />} />
      </Routes>
    </div>
  );
}

export default App;
