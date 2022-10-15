import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from './component/Login';
import Navbar1 from './component/Navbar1';
import './App.css';
import Registration from './component/Registration';


class App extends React.Component {   
  
  render() {
    return (
      <>
        <Router>
          <Navbar1 />              
          <Switch>
          
            <Route exact path="/login" component={() => <Login myProp=""/> }  />  
             <Route exact path="/addstudent" component={() => <Registration myProp=""/>} />
            {/* <Route exact path="/login" component={Login}  />  
             <Route exact path="/addstudent" component={Registration} /> */}
           
            {/* <Route  path="/login"> 
            <Login />
            </Route>
            <Route  path="/addstudent">
            <Registration  />
            </Route> */}

          </Switch>
        </Router>
      </>
    );
  }
}


export default App;
