import React, { useState } from 'react';

const NavigationBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navigation-bar">
      <div className="menu">
        <button className="menu-button" onClick={toggleMenu}>
          &#9776;
        </button>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <button onClick={closeMenu}>Close</button>
            {/* Add dropdown menu items here */}
          </div>
        )}
      </div>
      <div className="categories">
        <button className="category-button">Best Sellers</button>
        <button className="category-button">Buy More & Save</button>
        <button className="category-button">Gift Ideas</button>
        <button className="category-button">Music</button>
      </div>
    </div>
  );
};

export default NavigationBar;
