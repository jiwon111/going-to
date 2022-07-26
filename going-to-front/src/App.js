import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cover from './pages/Cover';
import Main from './pages/Main';
import When from './pages/When';
import Domestic2 from './pages/Domestic2';
import Foreign2 from './pages/Foreign2';
import Domestic3 from './pages/Domestic3';
import Foreign3 from './pages/Foreign3';
import Result from './pages/Result';
const App = () => {
  return (
    <div className="App">
      {/* <div
        className={window.location.pathname === '/' ? 'AppCover' : 'AppFrame'}
      > */}
      <div className="AppFrame">
        <title>고잉투</title>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/main" element={<Main />} />
            <Route path="/domestic" element={<When />} />
            <Route path="/domestic/1" element={<Domestic2 />} />
            <Route path="/domestic/1/2" element={<Domestic3 />} />
            <Route path="/foreign" element={<When />} />
            <Route path="/foreign/1" element={<Foreign2 />} />
            <Route path="/foreign/1/2" element={<Foreign3 />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
