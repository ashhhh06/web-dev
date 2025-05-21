
import React,{useState} from 'react';
function ToDoList(){

    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTasks]=useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value)

    }

    function addTask(){

        if (newTask.trim()!==''){
            setTasks(t=> [...t,newTask]);
            setNewTasks("");

        }
        

    }

    function deleteTask(index){

        const updatedTask=tasks.filter((_,i)=>i!==index);
        setTasks(updatedTask);

    }

    function moveTaskUp(index){

        if (index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index){
        if (index<tasks.length){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    



    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>

                <input type="text" placeholder="enter the task description" 
                        value ={newTask}
                        onChange={handleInputChange}/>

                <button
                    className="add-button" onClick={addTask}>
                    Add
                </button>

            </div>

            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">
                            {task}
                        </span>
                        <button className="delete-button" onClick={()=> deleteTask(index)}>
                            delete
                        </button>
                        <button className="up-button" onClick={()=>moveTaskUp (index)}>
                            up
                        </button>
                        <button className="down-button" onClick={()=> moveTaskDown(index)}>
                            down
                        </button>

                    </li>
                )}
            </ol>




        </div>

    );

}
export default ToDoList