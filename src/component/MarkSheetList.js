
import axios from "axios";
import { Link } from "react-router-dom";
import Base from "./Base"
import FormMessage from './FormMessage';
export default class MarkSheetList extends Base {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                message: '',
                error: '',
                type:""
            },
            rollNo: '',
            name: '',
            list: [],
            length:''
        }
        this.search();
    }
   
    
    
    search() {
        axios.post("http://api.sunilos.com:9080/ORSP10/Marksheet/search", this.state)
            .then((res) => {
                // console.log(res);
                this.setState({
                list: res.data.result.data ,
               });
            });
    }
    delete(id) {
        let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/delete/" + id;
        axios.get(url).then((res) => {
            this.changeInputError("message", "Data Deleted Successfully");
            this.changeInputError("error", "false");
            this.changeInputError("type", "success");

            this.search();
        });
    }
    render() {
        return (
            <>
                 {(()=>{if(this.state.inputError.message){
              return(
           
            <div> <FormMessage type={this.getInputError("type")} error={this.getInputError("error")} message={this.getInputError('message')} /> </div>
                 
              )
            }
            })()
            }
                <div style={{margin: '65px'}} className="container overflow-hidden text-center my-5">
                    <div className="row gx-2">
                        <div className="col text-end">
                            <div className="p-3 ">  <input name="rollNo" placeholder='Search by RollNo'
                                value={this.state.rollNo}
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
                <table style={{ width: "70%", margin: "0px 200px" }} className="table table-success table-success table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">RollNo</th>
                            <th scope="col">Name</th>
                            <th scope="col">physics</th>
                            <th scope="col">Chemistry</th>
                            <th scope="col">Maths</th>
                            <th scope="col">delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((ele, i) => (
                            <tr key={i}>

                                <td>{i+1}</td>
                                <td>{ele.rollNo}</td>
                                <td>{ele.name}</td>
                                <td>{ele.physics}</td>
                                <td>{ele.chemistry}</td>
                                <td>{ele.maths}</td>
                                <td> <button className="btn btn-primary " type="button" onClick={(event) => this.delete(ele.id)}>Delete</button> </td>
                                <td><Link to={'/addmarksheet/' + ele.id}>Edit</Link></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                {/* <div style={{    margin: '11px 300px'}}>

                <button className='btn btn-primary' onClick={this.previousClick}>Previous</button>&nbsp;
                <button  className='btn btn-primary' onClick={this.nextClick}>Next</button>
                </div> */}
            </>
        )
    }
}
