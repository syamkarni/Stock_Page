import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StockList from './components/StockList';
import StockDetail from './components/StockDetail';
import Linechart from './components/StockChart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StockList />} />
          <Route path="/stock/:number" element={<StockDetail />} />
          <Route path="/stock-chart" element={<Linechart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;