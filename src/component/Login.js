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

    }

  }
  reset() {
    this.setState({
      form: {
        loginId: "",
        password: ""
      }
    });

    this.changeInputError("error", "");
    this.changeInputError("message", "");
    this.changeInputError("type", "");
    this.changeInputError("loginId", "");
    this.changeInputError("password", "");
  }
  login() {
    axios.post("http://api.sunilos.com:9080/ORSP10/Auth/login", this.state.form)
      .then((res) => {
        console.log(res)
        if (res.data.success === true) {
          alert("login successfully")
          
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<Nextpage userid={res.data.result.data.name} />);
          
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
      <div className='login'>
        <h2 align="center" style={{ marginBottom: '1px', textDecorationLine: 'underline', marginLeft: '427px', width: '356px', color: 'white' }}>Login</h2>
        <div className="data" >
          <form>
            <table>
              <div style={{ color: 'rgb(255 100 114)', height: '40px', width: '240px', fontSize: '24px' }}>
                {this.state.inputError.message}
              </div>

              <label>Email ID : </label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '230px' }} id='t1' placeholder="Enter Email ID" name="loginId" value={this.state.form.loginId} onChange={(event) => this.changeFormState(event)} />  </p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)', height: '18px', width: '199px' }}>{this.state.inputError.loginId}  </div>

              <label>  Password :</label>
              <p style={{ marginBottom: '0rem' }}><input style={{ width: '230px' }} type="password" id='t1' placeholder="Enter Password" name="password" value={this.state.form.password} onChange={(event) => this.changeFormState(event)} /></p>
              <div style={{ textAlign: "center", marginLeft: "-11px", color: 'rgb(255 100 114)', height: '20px', width: '222px' }}>{this.state.inputError.password}  </div>

              <br></br>
              <button type='button' style={{ marginRight: '40px' }} className='B' onClick={(event) => this.login(event)}>Login</button>
              <button type='button' onClick={(event) => this.reset(event)} className='B'>reset</button>

            </table>
            <br></br>
          </form>

        </div>
        </div>
      </>
    )
  }
}
