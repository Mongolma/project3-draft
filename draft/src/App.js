import Nav from './components/Navbar'
import HeroSection from './components/HeroSection'
import Home from './Pages';
import Login from './Pages/Login';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './components/AppContainer'
import Form from './Pages/Form';

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
  <Route path='/login' component={Login} exact /> 
  <Route path='/' component={Home} exact /> 
  {/* <Form /> */}
  </BrowserRouter>  )

}

export default App;
