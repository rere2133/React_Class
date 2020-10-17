import React, { useState } from 'react'
import TodoItem from './TodoItem'
import TodoItemEditForm from './TodoItemEditForm'
import QueueAnim from 'rc-queue-anim'

function TodoList(props) {
  const { todos, viewFilter } = props

  return (
    <>
      <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
        {/* map使用子元素要求唯一key值 */}
        {/* 這裏id作為key值 */}
        {/* 依照每個項目的completed來控制呈現的樣子 */}

        {todos.map((item, index) => {
          if (viewFilter === 1 && !item.completed) return
          if (viewFilter === 2 && item.completed) return

          return item.edited ? (
            <TodoItemEditForm key={item.id} todo={item} {...props} />
          ) : (
            <TodoItem key={item.id} todo={item} {...props} />
          )
        })}
      </QueueAnim>
    </>
  )
}
export default TodoList
