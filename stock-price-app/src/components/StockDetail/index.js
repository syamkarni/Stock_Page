import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStockDetails } from '../../actions/stockDetailsActions';
import Linechart from '../StockChart';
import Header from '../Header/index';

const StockDetail = ({ fetchStockDetails, stock, loading, error }) => {
  const { number } = useParams();

  useEffect(() => {
    fetchStockDetails(number);
  }, [number, fetchStockDetails]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Header />
      <div>
      <h2>{stock.Name}</h2>
      <p>{stock.Sector}</p>
      <p>Open: {stock.Open}</p>
      <p>Volume: {stock.Volume}</p>
      <p>52 Week High VWAP: {stock['52 Week HVWAPgh']}</p>
      <p>52 Week Low: {stock['52 Week Low']}</p>
      <p>Beta: {stock.Beta}</p>
      <p>Face Value: {stock['Face Value']}</p>
      <p>HVWAPgh: {stock.HVWAPgh}</p>
      <p>LC LVWAPmVWAPt: {stock['LC LVWAPmVWAPt']}</p>
      <p>Low: {stock.Low}</p>
      <p>Market Cap (Rs. Cr.): {stock['Mkt Cap (Rs. Cr.)']}</p>
      <p>Previous Close: {stock['PrevVWAPous Close']}</p>
      <p>UC LVWAPmVWAPt: {stock['UC LVWAPmVWAPt']}</p>
      <p>VWAP: {stock['VWAPVWAP']}</p>
      <p>Value (Lacs): {stock['Value (Lacs)']}</p>
      <p>Last : {stock['NSE_Change']}</p>
      <p>LastPercent: {stock['NSE_Change_Percentage']}</p>
        <Linechart graphLink={stock.Graph_link} />
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
