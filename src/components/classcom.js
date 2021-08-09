import React, { Component } from "react"
class classcom extends Component{
 constructor(){
    super();
    this.state={
        value:'hello'
    }
    this.changepara = this.changepara.bind(this)
 }  
 changepara(){
     this.setState({
         value:"welcome"
     })
 }
  render(){ 
      return(
        <div>
    
        <p>{this.state.value}</p>
            <button onClick={this.changepara} >clickhere</button>
        </div>
    )
}
}

export default classcom