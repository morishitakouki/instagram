import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar.jsx';
import './App.css'; // CSSファイルをインポート
import Create from './containers/Create.jsx';
import Index from './containers/Index.jsx';
import Register from './containers/Register.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="content">
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
          <Routes>
            <Route path="/index" element={<Index />} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
