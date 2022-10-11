import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {IoHomeSharp} from "react-icons/io5";
import {BiLogIn} from "react-icons/bi";
import {FaUserPlus} from "react-icons/fa";

export default class Navbar1 extends Component {
    render() {
        return (
            <>
            <div className='nav1'>
                <nav style={{background:' linear-gradient(181deg, #71769f, transparent)'}} className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                    
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               
                             <div className="iohome" style={{paddingLeft: '18px' ,marginTop:'6px'}}><IoHomeSharp/></div>
                                <li className="nav-item">
                                    <Link  className="nav-link home" to='/'>Home</Link>
                                </li>
                                <div className="iohome" style={{paddingLeft: '18px' ,marginTop:'6px'}}><BiLogIn/></div>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Login</Link>
                                </li>
                                <div className="iohome" style={{paddingLeft: '18px' ,marginTop:'6px'}}><FaUserPlus/></div>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/addstudent'>User Registration</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
            </>
        )
    }
}
