// import React, { Component } from 'react'
import './MyCss.css'
import axios from 'axios';
import Base from './Base'
import FormError from './FormError';
import FormMessage from './FormMessage';

export default class AddMarkSheet extends Base  {
    constructor(props) {
        super(props);
        this.state = {
          inputError: {
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: '',
            message: '',
            error: '',
            type:''
    
          },
          form: {
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: ''
    
          },
    
        }
        if (this.props.match.params.pid) {
          this.getdata();
    
        }
    
      }
      reset(){
        this.setState({
          form: {
            id: '',
            rollNo: '',
            name: '',
            physics: '',
            chemistry: '',
            maths: '',
            studentId: ''
    
          }
        });
        this.changeInputError("error", "");
        this.changeInputError("message", "");
        this.changeInputError("rollNo", "")
        this.changeInputError("name", "")
        this.changeInputError("physics", "")
        this.changeInputError("chemistry", "")
        this.changeInputError("maths", "")
        this.changeInputError("studentId", "")
        this.changeInputError("type", "")

      }
      getdata() {
        let id = this.props.match.params.pid;
        axios.get("http://api.sunilos.com:9080/ORSP10/Marksheet/get/" + id)
          .then((res) => {
            this.setState({ form: res.data.result.data });
    
          })
      }
    
      save() {
        axios.post("http://api.sunilos.com:9080/ORSP10/Marksheet/save", this.state.form)
          .then((res) => {
            console.log(res);
            if (res.data.result.inputerror) {
              this.setState({ inputError: res.data.result.inputerror });
              this.changeInputError("error", "true");
            
            } else {
              this.changeInputError("error", "false");
              this.changeInputError("message", "data saved successfully");
              this.changeInputError("rollNo", "")
              this.changeInputError("name", "")
              this.changeInputError("physics", "")
              this.changeInputError("chemistry", "")
              this.changeInputError("maths", "")
              this.changeInputError("studentId", "")
              this.changeInputError("type", "success")
    
    
            }
          });
      }
    render() {
        return (

          <>
           {/* {(()=>{if(this.state.inputError.message){
              return(
           
            <div> <FormMessage type={this.getInputError("type")} error={this.getInputError("error")} message={this.getInputError('message')} /> </div>
                 
              )
            }
            })()
            }
          <center>
          <div id="data">
          <form>
          {(() => {
              if (this.props.match.params.pid) {
                return (

                  <h2>Update MarkSheet</h2>
                )
              }

              if (!this.props.match.params.pid) {
                return (

                    <h4>ADD MARKSHEET</h4>
                )
              }


            })()

            }
           
       
        
         
          <table cellPadding="15" > 
          <tbody>

          <tr>
          <td>RollNo:</td>
          <td style={{width:"73%"}}>
          <input type="number" id="t1" placeholder="Enter RollNo" name="rollNo" value={this.state.form.rollNo} onChange={this.changeFormState}/>
          </td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}> <FormError errorName={this.getInputError('rollNo')} /></td>          
          </tr>
          
          <tr>
          <td>Name:</td>
          <td><input type="text" id="t1"  placeholder="Enter Name" name="name" value={this.state.form.name} onChange={this.changeFormState}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}> <FormError errorName={this.getInputError('name')} /></td>          
          </tr>
          <tr>
          <td>Physics:</td>
          <td><input type="number" id="t1"  placeholder="Enter physics No" name="physics" value={this.state.form.physics} onChange={this.changeFormState}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}><FormError errorName={this.getInputError('physics')} /></td>          
          </tr>
          <tr>
          <td>Chemistry:</td>
          <td><input type="number" id="t1"  placeholder="Enter chemistry No" name="chemistry" value={this.state.form.chemistry} onChange={this.changeFormState}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}><FormError errorName={this.getInputError('chemistry')} /></td>          
          </tr>
          <tr>
          <td>Maths:</td>
          <td><input type="number" id="t1"  placeholder="Enter Maths No" name="maths" value={this.state.form.maths} onChange={this.changeFormState}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}>  <FormError errorName={this.getInputError('maths')} /></td>          
          </tr>
          <tr>
          <td>StudentId:</td>
          <td><input type="number" id="t1"  placeholder="Enter studentId" name="studentId" value={this.state.form.studentId} onChange={this.changeFormState}/></td>
          </tr>
          <tr>
          <td colSpan="2" style={{textAlign:"center",padding:"0px 0px"}}><FormError errorName={this.getInputError('studentId')} /></td>          
          </tr>
          <tr>
          <td  style={{textAlign:"center"}}> <button type='button' onClick={(event) => this.save(event)} className='B'>Save</button> </td>
         <td> <input type="reset" onClick={(event) => this.reset(event)} className="B"/></td>
          
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
        {(() => {
                if (this.props.match.params.pid) {
                  return (

                    <h2 style={{marginLeft:'555px',color:'white'}}>Update Marksheet</h2>
                  )
                }

                if (!this.props.match.params.pid) {
                  return (

                    <h4 style={{marginLeft:'555px',color:'white'}}>Add Marksheet</h4>
                  )
                }


              })()

              }
              {/* <h4 align="center" style={{marginBottom: '0px',textDecorationLine:'underline',marginLeft: '478px',width:'356px',color:'white'}}>Student Registration</h4> */}
        <div className="data" >
          <form>
            <table>
           
              <label>RollNo: </label>
              <p style={{marginBottom: '0rem'}}> <input style={{width:'308px'}} type="number" id="t1" placeholder="Enter RollNo" name="rollNo" value={this.state.form.rollNo} onChange={this.changeFormState} /> </p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'  }}> <FormError errorName={this.getInputError('rollNo')} /></div>

              <label>Name :</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="text" id="t1" placeholder="Enter name" name="name" value={this.state.form.name} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('name')} /> </div>
              
              <label>Physics:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="number" id="t1" placeholder="Enter physics marks" name="physics" value={this.state.form.physics} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('physics')} /></div>
              
              <label>chemistry:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="number" id="t1" placeholder="Enter chemistry marks" name="chemistry" value={this.state.form.chemistry} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px' }}><FormError errorName={this.getInputError('chemistry')} /> </div>
              
              <label>Maths:</label>
              <p style={{marginBottom: '0rem'}}><input style={{width:'308px'}} type="number" id="t1" placeholder="Enter maths marks" name="maths" value={this.state.form.maths} onChange={this.changeFormState} /></p>
              <div style={{ textAlign: "center", padding: "0px 0px", color: 'rgb(255 100 114)',height: '22px',width:'298px'}}><FormError errorName={this.getInputError('maths')} /> </div>

              <br></br>
              {/* <button type='button' style={{ marginRight: '40px' }} className='B' onClick={(event) => this.login(event)}>Login</button> */}
              <button type='button' style={{ marginRight: '67px',width: "110px" ,marginLeft: '26px'}} onClick={(event) => this.save(event)} className='B'>Add Student</button>
              <button type='button' onClick={(event) => this.reset(event)} className='B'>reset</button>

            </table>
            <br></br>
          </form>

        </div>

            </>
        )
    }
}
