import React, { useState } from 'react'
function Todofunction(){
    const[todo,settodo]=useState({
        input:'',
        todolists:[]

    })
    function inputHandler(e){
        todo({
            input:e.target.value
        })
    }
    function addTodolist(){
        var newlist={
            id:Date.now(),
            task:todo.input,
            completed:false
        }
        todo({
            todolists:todo.todolists.concat(newlist),
            input:''
        })
    }
    toggleComplete()
 return(
    <>
    <div>
        <input onChange={(e)=>todo.inputHandler(e)} value={todo.input}/>
        <button onClick={todo.addTodolist}>Add</button>
    </div>
    {
         todo.todolists && (
            <div>
                {
                    todo.todolists.map((tasks,ind)=>{
                       return( <div key={ind}>
                            <p className={tasks.completed?'strike':null} onClick={()=>this.toggleComplete(tasks.id)}>{tasks.task}</p>
                        </div>)
                    })
                }
            </div>
         )
    }
    </>
)
}
    

