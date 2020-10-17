import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState(['買iphone12', '學react'])

  return (
    <>
      <h1 className="mt-5 titleStyle">範例：待辦事項</h1>
      <input
        type="text"
        className="my-2"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            //建立新陣列（合併原本todos陣列中的值）
            const newTodos = [e.target.value, ...todos]

            //設定todos狀態值
            setTodos(newTodos)

            //清空輸入匡
            setTodoInput('')
          }
        }}
      />
      <Button
        type="button"
        variant="primary"
        className="mx-2"
        onClick={() => {
          const newTodosInput = [todoInput, ...todos]

          setTodos(newTodosInput)
          setTodoInput('')
        }}
      >
        Add Todo
      </Button>
      <hr />
      <ul>
        {/* map使用子元素要求唯一key值 */}
        {/* 這裏id作為key值 */}
        {/* 依照每個項目的completed來控制呈現的樣子 */}
        {todos.map((value, index) => {
          return <li key={index}> {value} </li>
        })}
      </ul>
    </>
  )
}
export default TodoApp
