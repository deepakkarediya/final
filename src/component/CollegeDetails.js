import axios from 'axios';
import Base from './Base'
import FormError from './FormError';
import FormMessage from './FormMessage';

export default class CollegeDetails extends Base {
  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        id: '',
        name: '',
        address: '',
        city: '',
        state: '',
        phoneNo: '',
        message: '',
        error: ''

      },
      form: {
        id: '',
        name: '',
        address: '',
        city: '',
        state: '',
        phoneNo: ''

      },

    }
    if (this.props.match.params.cid) {
      this.getdata();

    }

  }
  reset(){
    this.setState({
      form: {
        id: '',
        name: '',
        address: '',
        city: '',
        state: '',
        phoneNo: ''

      },
    })
  }
  getdata() {
    let id = this.props.match.params.cid;
    axios.get("http://api.sunilos.com:9080/ORSP10/College/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });

      })
  }

  save() {
    axios.post("http://api.sunilos.com:9080/ORSP10/College/save", this.state.form)
      .then((res) => {
        // console.log(res);
        if (res.data.result.inputerror) {
          this.setState({ inputError: res.data.result.inputerror });
          this.changeInputError("error", "true");
        } else {
          this.changeInputError("error", "false");
          this.changeInputError("message", "data saved successfully");
          this.changeInputError("name", "")
          this.changeInputError("phoneNo", "")
          this.changeInputError("address", "")
          this.changeInputError("city", "")
          this.changeInputError("state", "")


        }
      });
  }

  render() {
    return (
      <>
        {(() => {
          if (this.state.inputError.message) {
            return (

              <div   style={{height: "52px",marginTop: "1px"}} className="alert alert-success" role="alert">

                <div > <FormMessage error={this.getInputError("error")} message={this.getInputError('message')} /> </div>
              </div>
            )

          }
        })()
        }
        <center>
          <div id="data">
            <form>
              {(() => {
                if (this.props.match.params.cid) {
                  return (

                    <h2>Update College</h2>
                  )
                }

                if (!this.props.match.params.cid) {
                  return (

                    <h4>ADD College </h4>
                  )
                }


              })()

              }




              <table cellPadding="15" >
                <tbody>

                  <tr>
                    <td>Name:</td>
                    <td style={{ width: "73%" }}>
                      <input type="text" id="t1" placeholder="Enter Name" name="name" value={this.state.form.name} onChange={this.changeFormState} />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError errorName={this.getInputError('name')} /></td>
                  </tr>

                  <tr>
                    <td>PhoneNo:</td>
                    <td><input type="number" id="t1" placeholder="Enter phoneNo" name="phoneNo" value={this.state.form.phoneNo} onChange={this.changeFormState} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError errorName={this.getInputError('phoneNo')} /></td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td><input type="text" id="t1" placeholder="Enter Address" name="address" value={this.state.form.address} onChange={this.changeFormState} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}><FormError errorName={this.getInputError('address')} /></td>
                  </tr>
                  <tr>
                    <td>city:</td>
                    <td><input type="text" id="t1" placeholder="Enter city" name="city" value={this.state.form.city} onChange={this.changeFormState} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}><FormError errorName={this.getInputError('city')} /></td>
                  </tr>
                  <tr>
                    <td>state:</td>
                    <td><input type="text" id="t1" placeholder="Enter state" name="state" value={this.state.form.state} onChange={this.changeFormState} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}>  <FormError errorName={this.getInputError('state')} /></td>
                  </tr>
                  <tr>
          <td style={{textAlign:"center"}}> <button type='button' onClick={(event) => this.save(event)} className='B'>Save</button> </td>
          <td> <input type="reset" onClick={(event) => this.reset(event)} className="B"/></td>
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
