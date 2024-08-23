import logo from './logo.svg';
import './App.css';
import Header from './header';
import About from './About';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Contact from './Contact'; 
import Services from './Services';
import Home from './home';


  

function App() {
  return (
    <Router>
    <div className="App">
   <Header/>
   
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/About" element={<About/>}/>
   <Route path="/services" element={<Services/>}/>
   <Route path="/contact" element={<Contact/>}/>
   </Routes>
    </div>
    </Router>
  );
}

export default App;
