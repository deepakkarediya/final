import React from 'react';
import './App.css';
import Login from './component/Login';

import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Navbar1 from './component/Navbar1';
// import Addstudent from './component/Addstudent';
// import Home from './component/Home';
import AddUser from './component/AddUser';



class App extends React.Component{
  render(){
    return(
      <> 
      <Router>
      <Navbar1/>
      
        <Switch>
      {/* <Route  exact path="/" component={Home}/> */}
      <Route exact path="/login" component={Login}/> 
      <Route exact path="/addstudent" component={AddUser}/>
   
        </Switch>
      </Router>
      </>
     );
  }
}


export default App;
