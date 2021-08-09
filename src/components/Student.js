import react, { Component } from 'react'
class Student extends Component {
    constructor(){
    super();
    this.state={
        s_name:'',
        s_dob:'',
        s_department:'',
        s_course:'',
        s_address:'',
        s_mobileno:''
    }
    this.submitbutton=this.submitbutton.bind(this)
    }
    studentdetails(e){
        console.log(e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitbutton(){
       var details=this.state
       var alldetails=''
       var flag='true'
       for(var check in details)
       {
           if(details[check]=="")
           {
               alert(check + "is empty")
               flag='false'
               break;
           }
           else{
               alldetails += details[check]+''
           }
       }
     flag =='true'&& alert(alldetails) 
    }

    render(){
        return(
            <div>
                
               <center>Student Details</center> <br></br>
                    <label>Name:</label><input name='s_name' onChange={(e)=>this.studentdetails(e)} value={this.state.s_name} /><br></br>
                    <label>Dob:</label><input name='s_dob' onChange={(e)=>this.studentdetails(e)} value={this.state.s_dob}/><br></br>
                    <label>Department:</label><input name='s_department' onChange={(e)=>this.studentdetails(e)} value={this.state.s_department}/><br></br>
                    <label>course:</label>
                    <input type='radio' name='s_course' onChange={(e)=>this.studentdetails(e)} value='BSC'></input>
                    <label>BSC</label>
                    <input type='radio' name='s_course' onChange={(e)=>this.studentdetails(e)} value='BCA'></input><label>BCA</label><br></br>
                    <label>Address:</label><textarea name='s_address' onChange={(e)=>this.studentdetails(e)} value={this.state.s_address}/><br></br>
                    <label>Mobileno</label><input name='s_mobileno' onChange={(e)=>this.studentdetails(e)} value={this.state.mobileno} /><br></br>
                    <button onClick={this.submitbutton} >Submit</button>
                
            </div>
        )   
    }
    
}
export default Student