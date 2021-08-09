import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Home extends Component{
    render(){
        return(
            <div>
                <p>Welcome to home page</p>
                <Link to='/about'>About</Link>
                <br></br>
                <Link to='/contact'>Contact</Link>
            </div>
        )
    }
}
export default Home