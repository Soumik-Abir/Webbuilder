import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Related from '../components/Related/Related';
import SignUp from '../components/SignUp/SignUp';
import Footer from '../components/Footer/Footer';


const HomePage = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <Main />
      <Related />
      <SignUp />
      <Footer />
    </Router>
  );
};

export default HomePage;
