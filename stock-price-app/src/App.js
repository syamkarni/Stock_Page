import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StockList from './StockList';
import StockDetail from './StockDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StockList />} />
          <Route path="/stock/:number" element={<StockDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
