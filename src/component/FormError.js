import React, { Component } from 'react'

export default class FormError extends Component {
    constructor(props){
        super(props);
        console.log(this.props.errorName);

    }
  render() {
    return (
      <>
        {(()=>{
                return(
                <h6 style={{color:"#76ed0ad1"}}>{this.props.errorName}</h6>
                )
                   })()}
      </>
    )
  }
}
