import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'

function TodoApp2(props) {
  const [todoInput, setTodoInput] = useState('')
  //   const [todos, setTodos] = useState(['買iphone12', '學react'])
  //每個待辦事項改為物件值
  // {id, text: string, completed: bool}
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone12', completed: false },
    { id: 2, text: '學react', completed: true },
  ])

  //更改items狀態（完成v.s未完成）
  //利用id值尋找對應item的索引值，改變completed值
  const handleCompleted = (id) => {
    //複製一個新todos陣列
    const newTodos = [...todos]
    //利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)
    //索引值結果不是-1,代表有找到
    if (todoItemIndex !== -1) {
      //布林值 true變false, false變true
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed
      //設定回原本的todos
      setTodos(newTodos)
    }
  }

  //刪除
  //利用id值尋找對應的item的索引值，然後移出陣列
  const handleDelete = (id) => {
    //建立一個新的陣列，其中不包含要被移除的項目(用filter)
    const newTodos = todos.filter((item, index) => item.id !== id)
    // 設定回原本的todos
    setTodos(newTodos)
  }

  return (
    <>
      <h1 className="mt-5 titleStyle">範例：待辦事項2</h1>
      <input
        type="text"
        className="my-2"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        // 新增
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value) {
            //建立新陣列（合併原本todos陣列中的值）
            const newItem = {
              id: +new Date(),
              text: e.target.value,
              complete: false,
            }
            const newTodos = [newItem, ...todos]

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
          if (todoInput) {
            const newItem = {
              id: +new Date(),
              text: todoInput,
              complete: false,
            }
            const newTodos = [newItem, ...todos]

            setTodos(newTodos)
            setTodoInput('')
          }
        }}
      >
        Add Todo
      </Button>
      <hr />

      {/* list */}
      <ul>
        {/* map使用子元素要求唯一key值 */}
        {/* 這裏id作為key值 */}
        {/* 依照每個項目的completed來控制呈現的樣子 */}
        {todos.map((item, index) =>
          item.completed ? (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              <del>{item.text}</del>

              <Button
                className="ml-3"
                variant="secondary"
                onClick={() => handleDelete(item.id)}
              >
                <BsFillTrashFill />
              </Button>
            </li>
          ) : (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              {item.text}
              <Button
                className="ml-3"
                variant="secondary"
                onClick={() => handleDelete(item.id)}
              >
                <BsFillTrashFill />
              </Button>
            </li>
          )
        )}
      </ul>
    </>
  )
}
export default TodoApp2
