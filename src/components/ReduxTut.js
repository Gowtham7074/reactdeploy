import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {Increasing,Decreasing} from '../redux/action'
class ReduxTutorial extends Component{
    render(){
        console.log(this.props.counter)
        return(
            <>
            <h1>Count - {this.props.counter.count}</h1>
            <button onClick={this.props.adding}>Increase</button>
            <button onClick={this.props.subtract}>Decrease</button>
            </>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        counter:state
    }
}
const mapStateToDispatch = (dispatch) =>{
    return{
        adding:()=>dispatch(Increasing()),
        subtract:()=>dispatch(Decreasing())
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(ReduxTutorial)