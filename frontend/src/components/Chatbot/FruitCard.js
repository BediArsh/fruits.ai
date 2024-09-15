import React from 'react';

function FruitCard({ fruit, onClick }) {
  return (
    <div className="fruit-card" onClick={onClick}>
      <h3>{fruit.name}</h3>
      <p>{fruit.description.substring(0, 20)}...</p>
    </div>
  );
}

export default FruitCard;
