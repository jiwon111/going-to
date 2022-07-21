import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cover from './pages/Cover';
import Main from './pages/Main';
import When from './pages/When';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppFrame">
          <title>고잉투</title>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/main" element={<Main />} />
            <Route path="/domestic" element={<When />} />
            <Route path="/foreign" element={<When />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
