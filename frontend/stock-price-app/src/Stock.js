import React from 'react';
import { useHistory } from 'react-router-dom';

const Stock = ({ stock }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/stock/${stock.number}`);
  };

  return (
    <div className="stock-container" onClick={handleClick}>
      <p><b>{stock.name}</b></p>
      <p>{stock.value}</p>
    </div>
  );
};

export default Stock;
