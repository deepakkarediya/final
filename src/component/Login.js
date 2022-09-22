// import React, { Component } from 'react'
// import './MyCss.css'
import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom/client';
import Base from './Base';
import FormMessage from './FormMessage';
import Nextpage from './Nextpage';


export default class Login extends Base {
  constructor(props) {
    super(props);
    
    this.state = {
      inputError: {
        message: "",
        error: "",
        userid: '',
        password: ''
      },

      form: {
        userid: "admin",
        password: "1234"
      },
      list:[]
    }
    this.search();
  }
  
  search=()=>{
    axios.post("http://api.sunilos.com:9080/ORSP10/Student/search",this.state)
    .then((res)=>{
          this.setState({list:res.data.result.data});
         });
  }
  

  login() {
   
    if (this.state.form.userid === "admin" && this.state.form.password === "1234") {
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Nextpage />);
    }
    else if (this.state.form.userid === "" || this.state.form.password === "") {
      if (this.state.userid === "") {
        this.changeInputError("userid", "name must not be null")
      }
      if (this.state.password === "") {
        this.changeInputError("password", "password must not be null")
      }

    }
    else {
      this.changeInputError("message", "invalid user name and password")
      this.changeInputError("userid", "")
      this.changeInputError("password", "")
      this.changeInputError("error", "true")
    }
  }
    render() {
      
        return (

          <>
          
          <center>
          <div id="data">
          <form>
          <h2 style={{    borderRadius: "16px",
    display: "inline-block",
    width: "25%",
    background: "linear-gradient(358deg, #ffe7e7, #bda1a108)"}}>Login</h2>
          {(() => {

if (this.state.error) {
  return (
    <div style={{ color: "red" }}> <FormMessage error={this.getInputError("error")} message={this.getInputError("message")} /></div>

  )
}
return null;
})()}

          <table cellPadding="15" > 
          <tbody>

          <tr>
          <td>Enter UserId:</td>
          <td style={{width:"61%"}}>
          <input type="text" id="t1" placeholder="Enter UserName" name="userid" value={this.state.form.userid} onChange={(event) => this.changeFormState(event)}/>
          </td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px" ,color:"red"}}> {this.state.inputError.userid}</td>          
          </tr>
          
          <tr>
          <td>Enter Password:</td>
          <td><input type="number" id="t1"  placeholder="Enter Password" name="password" value={this.state.form.password} onChange={(event) => this.changeFormState(event)}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px",color:"red"}}> {this.state.inputError.password}</td>          
          </tr>
                <tr>
          <td colSpan="2" style={{textAlign:"center"}}> <button type='button' onClick={(event) => this.login(event)} className='B'>Login</button> </td>
          
          </tr>
          </tbody>
          </table>
          </form>
          </div>
          </center>
            </>
        )
    }
}
