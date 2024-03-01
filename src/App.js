import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router> {/* Wrap your components with BrowserRouter */}
      <Navbar />
      <Header />
      <SignUp/>
      <Footer/>
    </Router>
  );
}

export default App;
