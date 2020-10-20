import React from 'react'
import { Button } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { BsPencilSquare } from 'react-icons/bs'

function TodoItem(props) {
  // const { text, completed, completedMethod, deleteMethod } = props
  const { todo, handleEditedToggle, handleCompleted, handleDelete } = props
  return (
    <>
      <li className="my-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCompleted(todo.id)}
        />
        {todo.completed ? <del>{todo.text}</del> : todo.text}

        <Button
          className="ml-3"
          variant="secondary"
          onClick={() => handleEditedToggle(todo.id)}
        >
          <BsPencilSquare />
        </Button>
        <Button
          className="ml-2"
          variant="secondary"
          onClick={() => handleDelete(todo.id)}
        >
          <BsFillTrashFill />
        </Button>
      </li>
    </>
  )
}
export default TodoItem
