import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from './component/Login';
import Navbar1 from './component/Navbar1';
import AddUser from './component/AddUser';
import './App.css';



class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar1 />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/addstudent" component={AddUser} />

          </Switch>
        </Router>
      </>
    );
  }
}


export default App;
