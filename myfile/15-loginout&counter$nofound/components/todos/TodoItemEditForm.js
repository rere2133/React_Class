import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function TodoItemEditForm(props) {
  const { todo, handleEditedSave } = props
  const [editText, setEditText] = useState(todo.text)
  return (
    <>
      <li>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <Button
          className="ml-3"
          variant="secondary"
          onClick={() => handleEditedSave(todo.id, editText)}
        >
          Save
        </Button>
      </li>
    </>
  )
}
export default TodoItemEditForm
