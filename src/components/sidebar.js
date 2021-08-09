import { render } from '@testing-library/react';
import react, { Component } from 'react'
class Sidebar extends Component{
    render(){
        return(
            <div>
                <select name="size" id="size">
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
</select>
            </div>
        )
    }
}
export default Sidebar
