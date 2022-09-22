import axios from "axios";
import Base from "./Base"
import { Link } from "react-router-dom";
import FormMessage from './FormMessage';
export default class CollegeList extends Base {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                message: '',
                error: ''
            },

            name: '',
            phoneNo: "",
            list: []
        }
        this.search();
    }
    search() {
        axios.post("http://api.sunilos.com:9080/ORSP10/College/search", this.state)
            .then((res) => {
                // console.log(res);
                this.setState({ list: res.data.result.data });
            });
    }
    delete(id) {
        let url = "http://api.sunilos.com:9080/ORSP10/College/delete/" + id;
        axios.get(url).then((res) => {
            this.changeInputError("message", "Data Deleted Successfully");
            this.changeInputError("error", "false");
            this.search();
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
                <div className="container overflow-hidden text-center my-5">
                    <div className="row gx-2">
                        <div className="col text-end">
                            <div className="p-3 ">  <input name="phoneNo" placeholder='Search by phoneNo'
                                value={this.state.phoneNo}
                                onChange={(event) => this.changeState(event)} /></div>
                        </div>
                        <div className="col text-start">
                            <div className="p-3 "><input name="name" placeholder='Search by Name' type="text"
                                value={this.state.name}
                                onChange={this.changeState} /> &nbsp; &nbsp;
                                <button type='button'
                                    onClick={(event) => this.search(event)}>Search</button></div>
                        </div>

                    </div>
                </div>
                <table style={{ width: "70%", margin: "0px 150px" }} className="table table-success table-hover table-bordered border-success">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">id</th>

                            <th scope="col">Name</th>
                            <th scope="col">PhoneNo</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((ele, i) => (
                            <tr key={i}>

                                <td>{ele.id}</td>

                                <td>{ele.name}</td>
                                <td>{ele.phoneNo}</td>
                                <td>{ele.address}</td>
                                <td>{ele.city}</td>
                                <td>{ele.state}</td>
                                <td> <button className="btn btn-primary " type="button" onClick={(event) => this.delete(ele.id)}>Delete</button> </td>
                                <td><Link to={'/collegedetails/' + ele.id}>Edit</Link></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}