import axios from "axios";
import Base from "./Base"
import FormError from './FormError'
import FormMessage from "./FormMessage";

export default class AddRole extends Base {

  constructor(props) {
    super(props);
    this.state = {
      inputError: {
        error: '',
        message: '',
        name: '',
        discription: ''


      },
      form: {
        name: '',
        discription: ''
      }
    }
    if (this.props.match.params.rid) {
      this.getdata();

    }

  }
  reset(){
    this.setState({
      form: {
        name: '',
        discription: ''
      }
    })
  }
  getdata() {
    let id = this.props.match.params.rid;
    axios.get("http://api.sunilos.com:9080/ORSP10/Role/get/" + id)
      .then((res) => {
        this.setState({ form: res.data.result.data });

      })
  }


  save() {
    axios.post("http://api.sunilos.com:9080/ORSP10/Role/save/", this.state.form)
      .then((res) => {
        console.log(res);
        if (res.data.result.inputerror) {

          this.setState({ inputError: res.data.result.inputerror });
          this.changeInputError("error", "true");
        }
        else {
          this.changeInputError("message", "Data save successfully");
          this.changeInputError("error", "false");
          this.changeInputError("name", "");
          this.changeInputError("discription", "");



        }

      });
  }
  render() {
    return (
      <>

        {(() => {
          if (this.state.inputError.message) {
            return (

              <div style={{height: "52px",marginTop: "1px"}} className="alert alert-success" role="alert">

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
                if (this.props.match.params.rid) {
                  return (

                    <h2>Update Role</h2>
                  )
                }

                if (!this.props.match.params.rid) {
                  return (

                    <h4>ADD Role</h4>
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
                    <td>Discription:</td>
                    <td><input type="text" id="t1" placeholder="Enter discription" name="discription" value={this.state.form.discription} onChange={this.changeFormState} /></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center", padding: "0px 0px" }}> <FormError errorName={this.getInputError('discription')} /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}> <button type='button' onClick={(event) => this.save(event)} className='B' style={{ width: "81px" }}>Add Role</button> </td>
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
