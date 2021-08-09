import React, { Component } from 'react'
import Color from "./Color"
class Comp extends Component{
constructor(){
    super()
    this.state={
        value:"Love encompasses a range of strong and positive emotional and mental states"
    }
    this.changepara = this.changepara.bind(this)
    }
    changepara(){
        this.setState({
                value:"love is pain"
            })
    }
render(){
    return(
        <div>
        <Color name={this.state.value}/>
        <p>{this.state.value}</p>
        <button onClick={this.changepara}>clickhere</button>
    </div>
    )
   
}
}
export default Comp 
