import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './StockList.css';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3001/');
        setStocks(response.data.slice(0, 20));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleStockClick = (number) => {
    navigate(`/stock/${number}`);
  };
  const fetchMoreStocks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3001/');
      setStocks(response.data);
    } catch (error) {
      console.error('Error fetching more stocks: ', error);
    }
  };
  window.onscroll = async function () {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      await fetchMoreStocks();
    }
  };

  return (
    <div className="stock-list">
      {stocks.map(stock => (
        <div key={stock.number} className="stock-container" onClick={() => handleStockClick(stock.number)}>
          <div className="stock-name">{stock.name}</div>
          <div className="stock-value">{stock.value}</div>
        </div>
      ))}
    </div>
  );
};

export default StockList;
