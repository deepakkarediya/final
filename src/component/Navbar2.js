import React, { Component } from 'react'
import logo from "./logo.png"
import {AiFillHome,AiFillCaretRight,AiOutlineLogout} from "react-icons/ai";
import {
  Link
} from "react-router-dom";

export default class Navbar2 extends Component {
 
  logout(){
      // window.localStorage.clear();
      window.location.href = "/";
  
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg  bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item "> <img src={logo} alt="...." style={{width:"170px",height: "55px",margin: "0px 75px"}}/></li>

        <li style={{ marginTop: "30px"}}><span ><AiFillHome/></span></li>
        
        <li className="nav-item" style={{ marginTop: "24px"}}>
        <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
        </li>
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Student
          </a>
          <ul className="dropdown-menu">
        
          <li><AiFillCaretRight/><Link  style={{display: 'contents'}} className="dropdown-item" to="/addstudent">AddStudent</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><AiFillCaretRight/><Link style={{display: 'contents'}} className="dropdown-item" to="/studentlist">StudentList</Link></li>
         
          </ul>
        </li>
        
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marksheet
          </a>
          <ul className="dropdown-menu">
          <li><AiFillCaretRight/><Link  style={{display: 'contents'}} className="dropdown-item" to="/addmarksheet">AddMarkSheet</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><AiFillCaretRight/><Link  style={{display: 'contents'}} className="dropdown-item" to="/marksheetlist">MarkSheet list</Link></li>
         
          </ul>
        </li>
        
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            College
          </a>
          <ul className="dropdown-menu">
          <li><AiFillCaretRight/><Link  style={{display: 'contents'}} className="dropdown-item " to="/collegedetails">AddCollege</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><AiFillCaretRight/><Link  style={{display: 'contents'}} className="dropdown-item" to="/collegelist">College list</Link></li>
         
         
          </ul>
        </li>
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Role
          </a>
          <ul className="dropdown-menu">
          <li><AiFillCaretRight/><Link  style={{display: 'contents'}} className="dropdown-item " to="/addrole">Add Role</Link></li>
          <li><hr className="dropdown-divider"/></li>
         <li><AiFillCaretRight/><Link style={{display: 'contents'}} className="dropdown-item" to="/rolelist">Role list</Link></li>
                   
          </ul>
        </li>
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul className="dropdown-menu">
          <li><AiFillCaretRight/><Link  style={{display: 'contents'}} className="dropdown-item" to="/adduser">Add User</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><AiFillCaretRight/><Link  style={{display: 'contents'}} className="dropdown-item" to="/userlist">User List</Link></li>
          
          </ul>
        </li>
        <li style={{textDecorationLine:'underline', marginTop: '31px',  width: '350px'}}>{this.props.user}</li>
       
        <li style={{marginTop:'31px', marginLeft: '82px'}}><AiOutlineLogout/></li>
        <li>
        <Link style={{ marginTop: "24px",color:'red',fontWeight: '600'}} className="nav-link " to="" onClick={this.logout}>Logout</Link>
        </li>
         
       </ul>
      
    </div>
  </div>
</nav>
      </>
    )
  }
}
