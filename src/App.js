import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from './Chat'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/room/:roomId">

            </Route>
            <Route path="/">

            </Route>
          </Routes>
          <Chat />
        </div>
      </Router>
    </div>
  );
}

export default App;
