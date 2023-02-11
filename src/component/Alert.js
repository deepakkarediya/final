import React, { Component } from 'react'

export default class Alert extends Component {
 capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1)
}
  render() {
    return (   
 <div style={{marginTop: '61px'}}>
 { this.props.alert.msg?<div className={`alert alert-${this.props.alert.type} alert-dismissible fade show`}  role="alert">
  <strong>{this.capitalize(this.props.alert.type)}</strong>:{this.props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>:""
}
    </div>
       
 
   
    )
  }
}
