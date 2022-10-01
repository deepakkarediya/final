import React from 'react'
import Navbar2 from './Navbar2'
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
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

export default function Nextpage() {
  return (
    <div>
  <Router>
    <Navbar2/>
    <Switch>
    
    <Route exact path="/addstudent" component={Addstudent} />
    <Route exact path="/studentlist" component={StudentList} />
    <Route exact path="/addstudent/:sid" component={Addstudent} />
   <Route exact path="/addmarksheet" component={AddMarkSheet} />
    <Route exact path="/marksheetlist" component={MarkSheetList}/>
    <Route exact path="/addmarksheet/:pid" component={AddMarkSheet} />
    <Route exact path="/collegedetails" component={CollegeDetails} />
    <Route exact path="/collegelist" component={CollegeList} />
    <Route exact path="/collegedetails/:cid" component={CollegeDetails} />
    <Route exact path="/addrole" component={AddRole} />
    <Route exact path="/rolelist" component={RoleList} />
    <Route exact path="/addrole/:rid" component={AddRole} />
    <Route exact path="/adduser" component={AddUser} />
    <Route exact path="/userlist" component={UserList} />
    <Route exact path="/userlist/:uid" component={AddUser} />
    
    
    </Switch>
      </Router>
            </div> 
    
  )
}
