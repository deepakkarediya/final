import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {IoHomeSharp} from "react-icons/io5";

export default class Navbar1 extends Component {
    render() {
        return (
            <>
            <div>
                <nav style={{background:' linear-gradient(181deg, #71769f, transparent)'}} className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                    
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               
                             <div style={{paddingLeft: '18px' ,marginTop:'5px'}}><IoHomeSharp/></div>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/addstudent'>Registration</Link>
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
