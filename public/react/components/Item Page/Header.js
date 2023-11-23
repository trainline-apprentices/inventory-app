import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <button className="home-button">Home</button>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      <div className="user-options">
        <button className="account-button">Account</button>
        <button className="basket-button">Basket</button>
      </div>
    </header>
  );
};

export default Header;