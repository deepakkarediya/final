import axios from "axios";
import Base from "./Base"
import FormError from './FormError'
import FormMessage from "./FormMessage";

export default class AddUser extends Base {

  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        error: '',
        message: '',
        firstName: '',
        lastName: '',
        loginId: '',
        password: '',
        roleId: '',
        type: ''


      },
      form: {
        firstName: '',
        lastName: '',
        loginId: '',
        roleId: '138',
        password: ''

      }
    }
    if (this.props.match.params.uid) {
      this.getdata();

    }

  }
  reset() {
    this.setState({  form: {
      firstName: '',
      lastName: '',
      loginId: '',
      roleId: '138',
      password: ''

    }})
    this.changeInputError("firstName", "");
    this.changeInputError("lastName", "");
    this.changeInputError("loginId", "");
    this.changeInputError("password", "");
    this.changeInputError("roleId", "");
  }
  getdata() {
    let id = this.props.match.params.uid;
    axios.get("http://api.sunilos.com:9080/ORSP10/User/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });

      })
  }


  save() {
    axios.post("http://api.sunilos.com:9080/ORSP10/User/save/", this.state.form)
      .then((res) => {
        console.log(res);
        if (res.data.result.inputerror) {


          this.setState({ inputError: res.data.result.inputerror });
        }
        else {
          this.changeInputError("message", "Register successfully");
          this.changeInputError("error", "false");
          this.changeInputError("firstName", "");
          this.changeInputError("lastName", "");
          this.changeInputError("loginId", "");
          this.changeInputError("password", "");
          this.changeInputError("roleId", "");
          this.changeInputError("type", "success");
        }

      });
  }
  render() {
    return (
      <>
        {/* {(() => {
          if (this.state.inputError.message) {
            return (
              <div>
                <FormMessage type={this.getInputError("type")} error={this.getInputError("error")} message={this.getInputError('message')} />
               
              </div>
            )
          }

        })()
        }
        <center>
          <div id="data">
            <form>
              {(() => {
                if (this.props.match.params.uid) {
                  return (

                    <h2>Update User</h2>
                  )
                }

                if (!this.props.match.params.uid) {
                  return (

                    <h4>Student Registration</h4>
                  )
                }


              })()

              }




              <table cellPadding="15" >
                <tbody>

                  <tr>
                    <td>FirstName:</td>
                    <td style={{ width: "73%" }}>
                      <input style={{width:'308px'}} type="text" id="t1" placeholder="Enter Firstname" name="firstName" value={this.state.form.firstName} onChange={this.changeFormState} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError errorName={this.getInputError('firstName')} /></td>
                  </tr>

                  <tr>
                    <td>LastName:</td>
                    <td><input style={{width:'308px'}} type="text" id="t1" placeholder="Enter Lastname" name="lastName" value={this.state.form.lastName} onChange={this.changeFormState} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError errorName={this.getInputError('lastName')} /></td>
                  </tr>
                  <tr>
                    <td>LoginId:</td>
                    <td><input style={{width:'308px'}} type="text" id="t1" placeholder="Enter LoginId" name="loginId" value={this.state.form.loginId} onChange={this.changeFormState} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}><FormError errorName={this.getInputError('loginId')} /></td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td><input style={{width:'308px'}} type="text" id="t1" placeholder="Enter password" name="password" value={this.state.form.password} onChange={this.changeFormState} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}><FormError errorName={this.getInputError('password')} /></td>
                  </tr>

                  <tr>
                    <td>RoleId:</td>
                    <td><input style={{width:'308px'}} type="number" id="t1" placeholder="Enter RoleId" name="roleId" value={this.state.form.roleId} onChange={this.changeFormState} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}><FormError errorName={this.getInputError('roleId')} /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}> <button type='button' onClick={(event) => this.save(event)} style={{ width: "91px" }} className='B'>Add User</button> </td>
                    <td> <input style={{width:'308px'}} type="reset" onClick={(event) => this.reset(event)} className="B" /></td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </center> */}
        {(() => {
          if (this.state.inputError.message) {
            return (
              <div>
                <FormMessage type={this.getInputError("type")} error={this.getInputError("error")} message={this.getInputError('message')} />
               
              </div>
            )
          }

        })()
        }
              <h4 align="center" style={{marginBottom: '0px',marginLeft: '506px',marginTop:"20px",width:'356px',color:'white'}}>Student Registration</h4>
        <div className="data" >
          <form>
            <table>
           
              <label>FirstName : </label>
              <p style={{marginBottom: '0rem'}}> <input style={{width:'308px'}} type="text" id="t1" placeholder="Enter Firstname" name="firstName" value={this.state.form.firstName} onChange={this.changeFormState} /> </p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'  }}><FormError errorName={this.getInputError('firstName')} /></div>

              <label>LastName :</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="text" id="t1" placeholder="Enter Lastname" name="lastName" value={this.state.form.lastName} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('lastName')} /> </div>
              
              <label>emailId:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="text" id="t1" placeholder="Enter LoginId" name="loginId" value={this.state.form.loginId} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('loginId')} /></div>
              
              <label>Password :</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="text" id="t1" placeholder="Enter password" name="password" value={this.state.form.password} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px' }}><FormError errorName={this.getInputError('password')} /> </div>
              
              <label>RoleId :</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="number" id="t1" placeholder="Enter RoleId" name="roleId" value={this.state.form.roleId} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('roleId')} /> </div>

              <br></br>
              {/* <button type='button' style={{ marginRight: '40px' }} className='B' onClick={(event) => this.login(event)}>Login</button> */}
              <button type='button' style={{ marginRight: '67px',width: "84px" ,marginLeft: '26px'}} onClick={(event) => this.save(event)} className='B'>Add User</button>
              <button type='button' onClick={(event) => this.reset(event)} className='B'>reset</button>

            </table>
            <br></br>
          </form>

        </div>
      </>
    )
  }
}
