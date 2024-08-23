import { useState } from "react"
export default function TodoInput({handleAddTodos,todoValue,setTodoValue}){
    // const {handleAddTodos}=props
    // const [todoValue,setTodoValue]=useState('')
    return (
        <header>
            <input value={todoValue} 
            placeholder="Enter your task to be done"
            onChange={(e)=>{
                setTodoValue(e.target.value)
            }}
            />

            <button onClick={()=>{
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}