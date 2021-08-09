import React from 'react';
import {Link} from 'react-router-dom'
function Contact(){
    return (
        <div>
            <p>Welcome to Contact page</p>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/about'>Contact</Link>
        </div>
    )
}
export default Contact