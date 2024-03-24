import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StockDetail = () => {
  const [stock, setStock] = useState({});
  const { number } = useParams();

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3001/stock/${number}`);
        setStock(response.data);
      } catch (error) {
        console.error('Error fetching stock details: ', error);
      }
    };

    fetchStock();
  }, [number]);

  return (
    <div>
            <h2>{stock.Name}</h2>
            <p>{stock.Sector}</p>
            <p>Open: {stock.Open}</p>
            <p>Volume: {stock.Volume}</p>
            <p>52 Week High VWAP: {stock['52 Week HVWAPgh']}</p>
            <p>52 Week Low: {stock['52 Week Low']}</p>
            <p>Beta: {stock.Beta}</p>
            <p>Face Value: {stock['Face Value']}</p>
            <p>Graph Link: <a href={stock.Graph_link} target="_blank" rel="noopener noreferrer">Click Here</a></p>
            <p>HVWAPgh: {stock.HVWAPgh}</p>
            <p>LC LVWAPmVWAPt: {stock['LC LVWAPmVWAPt']}</p>
            <p>Low: {stock.Low}</p>
            <p>Market Cap (Rs. Cr.): {stock['Mkt Cap (Rs. Cr.)']}</p>
            <p>Previous Close: {stock['PrevVWAPous Close']}</p>
            <p>UC LVWAPmVWAPt: {stock['UC LVWAPmVWAPt']}</p>
            <p>VWAP: {stock['VWAPVWAP']}</p>
            <p>Value (Lacs): {stock['Value (Lacs)']}</p>

        </div>
  );
};

export default StockDetail;
