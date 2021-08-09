import react, { useEffect, useState } from'react'
function Fcom(){
    const [value,setvalue] = useState({loading:true,data:[]})
function changeName(){
    setvalue({
        loading:false,
        data:[{name:"ram"},{name:'sam'},{name:'som'}]}
    )

}
return(
    <div>
        <button onClick={changeName}>Clickhere</button>
       {value.data && value.data.map((obj)=>{
                     return <h1>{obj.name}</h1>
                 })} 
    </div>

)
}   
export default Fcom
