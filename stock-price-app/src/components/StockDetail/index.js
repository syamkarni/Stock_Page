import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStockDetails } from '../../actions/stockDetailsActions';
import Linechart from '../StockChart';
import Header from '../Header/index';
import './index.css';

const StockDetail = ({ fetchStockDetails, stock, loading, error }) => {
  const { number } = useParams();

  useEffect(() => {
    fetchStockDetails(number);
  }, [number, fetchStockDetails]);

  const getChangeClass = (nseChange) => {
    return nseChange < 0 ? 'stock-change-negative' : 'stock-change-positive';
  };

  if (loading) return <div className="loading"><div className="spinner"></div></div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="stock-details">
          <h2 className="stock-name">{stock.Name}</h2>
          <p className={`stock-change ${getChangeClass(stock['NSE_Change'])}`}>
            {stock['NSE_Change']} ({stock['NSE_Change_Percentage']})
          </p>
          <p><strong>Sector:</strong> {stock.Sector}</p>
          <div className="details-grid">
          <p>Value (Lacs): {stock['Value (Lacs)']}</p>
          <p>Open: {stock.Open}</p>
          <p>Volume: {stock.Volume}</p>
          <p>52 Week High VWAP: {stock['52 Week HVWAPgh']}</p>
          <p>52 Week Low: {stock['52 Week Low']}</p>
          <p>Beta: {stock.Beta}</p>
          <p>Face Value: {stock['Face Value']}</p>
          <p>Market Cap (Rs. Cr.): {stock['Mkt Cap (Rs. Cr.)']}</p>
          <p>Previous Close: {stock['PrevVWAPous Close']}</p>
          <p>VWAP: {stock['VWAPVWAP']}</p>
          <p>Low: {stock.Low}</p>
          <p>HVWAPgh: {stock.HVWAPgh}</p>
          <p>LC LVWAPmVWAPt: {stock['LC LVWAPmVWAPt']}</p>
          <p>UC LVWAPmVWAPt: {stock['UC LVWAPmVWAPt']}</p>
        </div>
        </div>
        <div className="stock-chart-container">
          <h2>Line Chart for {stock.Name}</h2>
          <div className="chart-box">
            <Linechart graphLink={stock.Graph_link} />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  stock: state.stockDetails.stockDetail,
  loading: state.stockDetails.loading,
  error: state.stockDetails.error
});

const mapDispatchToProps = {
  fetchStockDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(StockDetail);
