import react, { Component } from 'react'
class comdid extends Component{
    constructor(){
        super();
        this.state={
            loading:true,
            data:[]
        }
        this.changePara=this.changePara.bind(this)
}
// componentDidMount(){
//     this.setState({
//         loading:false, 
//         data:[{name:'ram'},{name:'janu'},{name:'96'}]
        
//     })
// }
changePara(){
    this.setState({
        loading:false, 
        data:[{name:'ram'},{name:'janu'},{name:'96'}]
    })
}
render(){
    console.log("from render")
    return(
        <div>
            <button onClick={this.changePara}>Click here</button>
            {this.state.loading&&<p>loading.....</p>}
            {
                this.state.data && this.state.data.map((obj)=>{
                    return <h1>{obj.name}</h1>
                })
                }
            
        </div>
    )
}
}
export default comdid