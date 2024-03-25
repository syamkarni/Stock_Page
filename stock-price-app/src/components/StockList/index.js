import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setStocks } from '../../actions/stockActions';
import './index.css';
import Header from '../Header/index';

const StockList = ({ stockList, setStocks }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [displayCount, setDisplayCount] = useState(20);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://127.0.0.1:3001/');
        setStocks(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [setStocks]);

  const handleStockClick = (number) => {
    navigate(`/stock/${number}`);
  };

  const handleScroll = useCallback(() => {
    const isAtBottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
    if (isAtBottom && !loading && displayCount < stockList.length) {
      setLoading(true);
      setTimeout(() => { 
        setDisplayCount(prevCount => prevCount + 20);
        setLoading(false);
      }, 1000);
    }
  }, [loading, displayCount, stockList.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Header/>
      <div className="stock-list">
        {stockList.slice(0, displayCount).map(stock => (
          <div key={stock.number} className="stock-container" onClick={() => handleStockClick(stock.number)}>
            <div className="stock-name">{stock.name}</div>
            <div className="stock-value">{stock.value}</div>
          </div>
        ))}
        {loading && <div>Loading more stocks...</div>}
        {displayCount >= stockList.length && <div>That's all I have got for Today:)</div>}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  stockList: state.stocks.stockList,
});

const mapDispatchToProps = {
  setStocks,
};

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
