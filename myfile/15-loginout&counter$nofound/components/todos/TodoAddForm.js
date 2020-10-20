import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function TodoAddForm(props) {
  //解構賦值
  const { todoInput, setTodoInput, todos, setTodos } = props
  return (
    <>
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
              edited: false,
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
    </>
  )
}
export default TodoAddForm
