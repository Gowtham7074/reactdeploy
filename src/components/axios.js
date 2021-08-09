import axios from 'axios'
import reeact, { Component } from 'react'
class axioss extends Component{
    constructor(){
        super();
        this.state={
            loading:true,
            data:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            this.setState({
                loading:false,
                data:res.data,
                error:""
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false,
                data:[],
                error:err.message

            })
        })
    }

    render(){
        return(
           <div>
               {
                   this.state.loading && <p>loading....</p>

               }
               {
                   this.state.data && this.state.data.map((user)=>{
                       return(<div>
                           <h1>{user.name}</h1>
                           <p>{user.email}</p>
                           </div>
                       )
                   })
               }
           </div>
        )
    }
}
export default axioss