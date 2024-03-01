import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router> {/* Wrap your components with BrowserRouter */}
      <Navbar />
      <Header />
      <SignUp/>
    </Router>
  );
}

export default App;
