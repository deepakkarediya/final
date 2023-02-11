import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from "./component/Alert";
import Login from "./component/Login";
import Navbar1 from "./component/Navbar1";
import Registration from "./component/Registration";


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      msg:"",
      type:"",
     }
  }
 
  showAlert=(message,type)=>{
      this.setState({
      msg:message,
      type:type
    });
    setTimeout(() => {
      this.setState({msg:"",
      type:""});
    }, 2000);

  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar1 />
          <Alert alert={this.state}/>
          <Routes>
            <Route
              path="/login"
              element={
                <Login showAlert={this.showAlert}/>
              }
            />
            <Route
              path="/addstudent" 
              element={
                <Registration showAlert={this.showAlert}/>
              }
            />
          </Routes>
        </BrowserRouter>

      </>
    );
  }
}
