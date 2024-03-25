import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../Header/index';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:3001/');
        setStocks(prevStocks => [...prevStocks, ...response.data.slice(prevStocks.length, prevStocks.length + 20)]);
        setHasMore(response.data.length > stocks.length + 20);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [stocks.length]);

  const handleStockClick = (number) => {
    navigate(`/stock/${number}`);
  };
  
  const handleScroll = useCallback(() => {
    const isAtBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
  
    if (isAtBottom && !loading) {
      setLoading(true);
    }
  }, [loading]);
  
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
    <Header/>
    <div className="stock-list">
      {stocks.map(stock => (
        <div key={stock.number} className="stock-container" onClick={() => handleStockClick(stock.number)}>
          <div className="stock-name">{stock.name}</div>
          <div className="stock-value">{stock.value}</div>
        </div>
      ))}
      {loading && <div>Loading more stocks...</div>}
      {!hasMore && <div>That's all I have got for Today:)</div>}
    </div>
    </>
    
  );
};

export default StockList;
