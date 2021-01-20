import Nav from './components/Navbar'
import HeroSection from './components/HeroSection'
import Home from './Pages';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './components/AppContainer'
import Form from './Pages/Form.js';

function App() {
  // return (
  // <BrowserRouter>  
  // {/* <Nav />
  // <HeroSection /> */}
  // {/* <Login /> */}
  // <Route path='/' component={Home} exact />
  // <BrowserRouter>  
  
  // );
  return( <BrowserRouter> 
  <Route path='/' component={Home} exact /> 
  <Route path='/login' component={Form} exact /> 
  </BrowserRouter>  )

}

export default App;
