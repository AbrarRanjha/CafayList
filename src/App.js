import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddEdit from './Pages/AddEdit';
import View from './Pages/View';
import Navabar from './Pages/Navbar';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 
function App() {
  return (
  <>
<BrowserRouter>
<Navabar/>

<br/>
<br/><br/><br/>
<ToastContainer position="top-center"/>
<Switch>
<Route exact path="/" component={AddEdit} />
<Route exact path="/CafeList" component={Home} />
<Route exact path="/view/:id" component={View} />
</Switch>
</BrowserRouter>
  </>
  )};

export default App;
