import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import AgeCheck from './components/AgeCheck'
import TodoApp from './components/TodoApp'
import TodoApp2 from './components/TodoApp2'

function App() {
  return (
    <>
      <MyNavbar />
      <main className="flex-shrink-0">
        <div className="container">
          <AgeCheck />
          <TodoApp />
          <TodoApp2 />
          {/* <AgeCheck /> */}
        </div>
      </main>
      <MyFooter />
    </>
  )
}

export default App
