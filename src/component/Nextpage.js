import React from 'react'
import Navbar2 from './Navbar2'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Addstudent from './Addstudent';
import AddMarkSheet from './AddMarkSheet';
import MarkSheetList from './MarkSheetList';
import CollegeDetails from './CollegeDetails';
import CollegeList from './CollegeList';
import AddRole from './AddRole';
import RoleList from './RoleList';
import AddUser from './AddUser';
import UserList from './UserList';
import StudentList from './StudentList';
import Alert from './Alert';

export default class Nextpage extends React.Component {
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
    }, 1300);

  }
render(){
  return (
    <div>
      <BrowserRouter>
        <Navbar2 user={this.props.userid} />
        <Alert alert={this.state}/>
        <Routes>
          <Route path="/addstudent" element={<Addstudent showAlert={this.showAlert}/>} />
          <Route path="/studentlist" element={<StudentList showAlert={this.showAlert}/>} />
          <Route path="/addstudent/:sid" element={<Addstudent showAlert={this.showAlert}/>} />

          <Route path="/addmarksheet" element={<AddMarkSheet showAlert={this.showAlert}/>} />
          <Route path="/marksheetlist" element={<MarkSheetList showAlert={this.showAlert}/>} />
          <Route path="/addmarksheet/:pid" element={<AddMarkSheet showAlert={this.showAlert}/>} />

          <Route path="/collegedetails" element={<CollegeDetails showAlert={this.showAlert}/>} />
          <Route path="/collegelist" element={<CollegeList showAlert={this.showAlert}/>} />
          <Route path="/collegedetails/:cid" element={<CollegeDetails showAlert={this.showAlert}/>} />

          <Route path="/addrole" element={<AddRole showAlert={this.showAlert}/>} />
          <Route path="/rolelist" element={<RoleList showAlert={this.showAlert}/>} />
          <Route path="/addrole/:rid" element={<AddRole showAlert={this.showAlert}/>} />

          <Route path="/adduser" element={<AddUser showAlert={this.showAlert}/>} />
          <Route path="/userlist" element={<UserList showAlert={this.showAlert}/>} />
          <Route path="/userlist/:uid" element={<AddUser showAlert={this.showAlert}/>} />
        </Routes>
      </BrowserRouter>


    </div>

  )
    }
}
