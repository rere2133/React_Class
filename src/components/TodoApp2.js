import React, { useState, useEffect } from 'react'
import TodoAddForm from './todos/TodoAddForm'
import TodoList from './todos/TodoList'
import { Button } from 'react-bootstrap'

function TodoApp2(props) {
  const [todoInput, setTodoInput] = useState('')
  // 0=all, 1= (view completed = true), 2=(view completed =false)
  const [viewFilter, setViewFilter] = useState(0)
  //   const [todos, setTodos] = useState(['買iphone12', '學react'])
  //每個待辦事項改為物件值
  // {id, text: string, completed: bool}
  // const [todos, setTodos] = useState([
  //   { id: 1, text: '買iphone12', completed: false, edited: false },
  //   { id: 2, text: '學react', completed: true, edited: false },
  //   { id: 3, text: '買ps5', completed: false, edited: false },
  //   { id: 4, text: '買牛奶', completed: true, edited: false },
  // ])

  const {todos, setTodos}= props

  //編輯
  //利用id值尋找對應item的索引值，改變edited值
  const handleEditedToggle = (id) => {
    //複製一個新todos陣列
    const newTodos = [...todos]
    //利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)
    //索引值結果不是-1,代表有找到
    if (todoItemIndex !== -1) {
      //布林值 true變false, false變true
      newTodos[todoItemIndex].edited = !newTodos[todoItemIndex].edited
      //設定回原本的todos
      setTodos(newTodos)
    }
  }

  //編輯儲存用
  //利用id值尋找對應item的索引值，改變text
  const handleEditedSave = (id, newText) => {
    //複製一個新todos陣列
    const newTodos = [...todos]
    //利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id)
    //索引值結果不是-1,代表有找到
    if (todoItemIndex !== -1) {
      //布林值 true變false, false變true
      newTodos[todoItemIndex].text = newText
      //設定回原本的todos
      setTodos(newTodos)
      //設定回原本狀態
      handleEditedToggle(id)
    }
  }

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
      <TodoAddForm
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        todos={todos}
        setTodos={setTodos}
      />
      <hr />
      {/* 0=all, 1= (view completed = true), 2=(view completed =false) */}
      <Button
        className="ml-3"
        variant="primary"
        onClick={() => setViewFilter(0)}
      >
        All
      </Button>
      <Button
        className="ml-2"
        variant="primary"
        onClick={() => setViewFilter(1)}
      >
        Done
      </Button>
      <Button
        className="ml-2"
        variant="primary"
        onClick={() => setViewFilter(2)}
      >
        Uncompleted
      </Button>
      <hr />
      {/* list */}
      <TodoList
        todos={todos}
        handleEditedToggle={handleEditedToggle}
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEditedSave={handleEditedSave}
        viewFilter={viewFilter}
      />
    </>
  )
}
export default TodoApp2
