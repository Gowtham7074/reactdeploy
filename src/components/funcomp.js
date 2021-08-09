import React, { useState } from "react"
function Funcom() {
    const [value,setvalue]=useState("hello")
    const changepara = () =>{
        setvalue("welcome")
    }
    return(

        <div>
            
            <p>{value}</p>            
            <button onClick={changepara}>clickhere</button>
            </div>
    )

    
}
export default Funcom