import React from 'react'

const TodoCard = (props) => {
    const {children,index,handleDeleteTodos,handleEditTodos}=props
  return (
        
        <li className='todoItem'>
            <div className='actionsContainer'>
                {children}
                
            <button onClick={()=>
                handleEditTodos(index)
            }>
            <i class='fa-solid fa-pen-to-square'></i>

            </button>
            <button onClick={()=>
                handleDeleteTodos(index)
            }>
            <i class='fa-regular fa-trash-can'></i>


            </button>
           
            
            </div>
            
        </li>
  )
}

export default TodoCard