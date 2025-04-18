import { useState } from "react";
function Addtodo({ onNewItem}){
    const[todoName , setTodoName] = useState("");
    const[todoDate , setTodoDate] = useState("");
    
    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    };
    const handleDateChange = (event) => {
        setTodoDate(event.target.value);
    };
    const handleAddbuttonClicked = () => {
        onNewItem(todoName,todoDate);
        setTodoName("");
        setTodoDate("");
    };

    return(
        <div className="addtodo container">
            <div className="row kg-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter Todoitem here" value={todoName} onChange={handleNameChange}/>
                </div>
                <div className="col-4">
                    <input type="date" value={todoDate} onChange={handleDateChange}/>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success kg-button" onClick={handleAddbuttonClicked}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Addtodo;