import React, { Component } from 'react'
import logo from "./logo.png"
import {AiFillHome,AiFillCaretRight,AiOutlineLogout} from "react-icons/ai";
import {
  Link
} from "react-router-dom";

export default class Navbar2 extends Component {
 name= localStorage.getItem('name');
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

        {/* <li style={{ marginTop: "30px"}}><span ><AiFillHome/></span></li> */}
        
        <li className="nav-item" style={{ marginTop: "24px"}}>
        <Link className="nav-link active" aria-current="page" to='/' ><AiFillHome/>Home</Link>
        </li>
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Student
          </a>
          <ul className="dropdown-menu">
          {/* style={{display: 'contents'}} */}
          <li><Link  className="dropdown-item" to="/addstudent"><AiFillCaretRight/>AddStudent</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><Link  className="dropdown-item" to="/studentlist"><AiFillCaretRight/>StudentList</Link></li>
         
          </ul>
        </li>
        
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Marksheet
          </a>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/addmarksheet"><AiFillCaretRight/>AddMarkSheet</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><Link className="dropdown-item" to="/marksheetlist"><AiFillCaretRight/>MarkSheet list</Link></li>
         
          </ul>
        </li>
        
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            College
          </a>
          <ul className="dropdown-menu">
          <li><Link  style={{display: 'contents'}} className="dropdown-item " to="/collegedetails"><AiFillCaretRight/>AddCollege</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><Link  style={{display: 'contents'}} className="dropdown-item" to="/collegelist"><AiFillCaretRight/>College list</Link></li>
         
         
          </ul>
        </li>
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Role
          </a>
          <ul className="dropdown-menu">
          <li><Link  className="dropdown-item " to="/addrole"><AiFillCaretRight/>Add Role</Link></li>
          <li><hr className="dropdown-divider"/></li>
         <li><Link  className="dropdown-item" to="/rolelist"><AiFillCaretRight/>Role list</Link></li>
                   
          </ul>
        </li>
        <li className="nav-item dropdown" style={{ marginTop: "24px"}}>
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul className="dropdown-menu">
          <li><Link  className="dropdown-item" to="/adduser"><AiFillCaretRight/>Add User</Link></li>
          <li><hr className="dropdown-divider"/></li>
          <li><Link  className="dropdown-item" to="/userlist"><AiFillCaretRight/>User List</Link></li>
          
          </ul>
        </li>
        <li style={{textDecorationLine:'underline', marginTop: '31px',  width: '350px',fontWeight: 'bolder'}}>{this.props.user}</li>
       
        {/* <li style={{marginTop:'31px', marginLeft: '82px'}}></li> */}
        <li>
        <Link style={{ marginTop: "24px", marginLeft: '82px',fontWeight: 'bolder'}} className="nav-link "  onClick={this.logout}><AiOutlineLogout/>Logout</Link>
        </li>
         
       </ul>
      
    </div>
  </div>
</nav>
      </>
    )
  }
}
