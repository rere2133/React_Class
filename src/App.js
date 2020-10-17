import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Home from './pages/Home'
import TodoAppPage from './pages/TodoAppPage'
import About from './pages/About'
import Product from './pages/Product'

function App() {
  const [todos, setTodos] = useState([])
  return (
    // 路由器
    <Router>
       <>
        <MyNavbar />
      <MainContent>
      {/* 路由表 */}
          <Switch>

              {/* 舊寫法 */}
              {/* <Route exact path="/" component={Home} />
              <Route path="/todo" component={TodoAppPage} /> */}
              
              {/* v5新寫法 */}
              {/* 首頁要exact path */}
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/product">
                <Product/>
              </Route>
              <Route path="/todo" >
                <TodoAppPage todos={todos} setTodos={setTodos} />
              </Route>
          </Switch>
        </MainContent>
        <MyFooter />
       </>
    </Router>
  )
}

export default App
