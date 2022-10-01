import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom/client';
import Base from './Base';
import Nextpage from './Nextpage';


export default class Login extends Base {
  constructor(props) {
    super(props);

    this.state = {
      inputError: {
        type: '',
        message: "",
        error: "",
        loginId: '',
        password: ''
      },

      form: {
        loginId: "",
        password: ""
      },
      list: []
    }

  }
  login() {
    axios.post("http://api.sunilos.com:9080/ORSP10/Auth/login",this.state.form)
      .then((res) => {
        console.log(res)
        if (res.data.success === true) {
             alert("login successfully")
        
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<Nextpage/>);
        }
        if (res.data.result.inputerror) {
          this.setState({ inputError: res.data.result.inputerror })
        }
        else {
          this.changeInputError("error", "true");
          this.changeInputError("message", "Invalid Id or password");
          this.changeInputError("type", "danger");
          this.changeInputError("loginId", "");
          this.changeInputError("password", "");
        }
      })

  }
  render() {

    return (
      <>
        <center>
          <div id="data">
            <form>
              <h2 style={{
                borderRadius: "16px",
                display: "inline-block",
                width: "25%",
                background: "linear-gradient(358deg, #ffe7e7, #bda1a108)"
              }}>Login</h2>
              {(() => {

                if (this.state.inputError.error) {
                  return (
                    <div style={{ color: "#dfb007" }}>
                      <h4>{this.state.inputError.message}</h4>
                    </div>

                  )
                }
                return null;
              })()}

              <table cellPadding="15" >
                <tbody>
                  <tr>
                    <td>Enter UserId:</td>
                    <td style={{ width: "61%" }}>
                      <input type="text" id="t1" placeholder="Enter UserName" name="loginId" value={this.state.form.loginId} onChange={(event) => this.changeFormState(event)} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px", color: "#dfb007" }}> {this.state.inputError.loginId}</td>
                  </tr>

                  <tr>
                    <td>Enter Password:</td>
                    <td><input type="number" id="t1" placeholder="Enter Password" name="password" value={this.state.form.password} onChange={(event) => this.changeFormState(event)} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px", color: "#dfb007" }}> {this.state.inputError.password}</td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}> <button type='button' onClick={(event) => this.login(event)} className='B'>Login</button> </td>
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
