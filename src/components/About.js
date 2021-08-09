import React from 'react';
import {Link} from 'react-router-dom'
function About(){
    return(
        <div>
            <p>Welcome to About page</p>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}
export default About