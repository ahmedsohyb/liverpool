import React from 'react';
import Header from '../Components/Header';
import News from '../Components/News';
import Matches from '../Components/Matches';
import Team from '../Components/Team';
import Tickets from '../Components/Tickets';
import Shop from '../Components/Shop';

const Home = () => {
  const homeStyle = {
    fontFamily: 'Arial, sans-serif', // خط الصفحة
    backgroundColor: '#f9f9f9', // لون خلفية الصفحة
    minHeight: '100vh', // ارتفاع الصفحة
  };

  return (
    <div style={homeStyle}>
      <Header />
      <News />
      <Matches />
      <Team />
      <Tickets />
      <Shop />
    </div>
  );
};

export default Home;