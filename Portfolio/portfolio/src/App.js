import './App.css';
import Header from './components/Header/Header';
import Routing from './Routing/Routing';
import {BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <div  > 
          <Routing />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
