import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#C8102E', // لون خلفية الهيدر
    color: 'white', // لون النص
    padding: '10px 20px', // Padding
    textAlign: 'center', // محاذاة النص
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    listStyle: 'none',
    padding: '0',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <header style={headerStyle}>
      <h1>Liverpool FC</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="/" style={linkStyle}>Home</a></li>
          <li><a href="/news" style={linkStyle}>News</a></li>
          <li><a href="/matches" style={linkStyle}>Matches</a></li>
          <li><a href="/team" style={linkStyle}>Team</a></li>
          <li><a href="/tickets" style={linkStyle}>Tickets</a></li>
          <li><a href="/shop" style={linkStyle}>Shop</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;