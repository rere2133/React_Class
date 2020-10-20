import React, { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Home from './pages/Home'
import NoFoundPage from './pages/NoFoundPage'
import Login from './pages/Login'
import Counter from './pages/Counter'
import Cart from './pages/Cart'
import Product from './pages/Product'
import ProductList from './pages/ProductList'



function App() {
  const [todos, setTodos] = useState([])
  //控制是否登入
  const [isAuth, setIsAuth] = useState(false)
  //for Login usage

  return (
    // 路由器
    <Router>
       <>
        <MyNavbar isAuth={isAuth}/>
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
              <Route exact path="/counter">
                <Counter/>
              </Route>
              <Route exact path="/cart">
                <Cart/>
              </Route>
              <Route exact path="/productlist">
                <ProductList/>
              </Route>
              <Route exact path="/login">
                <Login isAuth={isAuth} setIsAuth={setIsAuth} />
              </Route>
              
           
              <Route exact path="/product/:id?">
                <Product isAuth={isAuth} />
              </Route>
              
              <Route path="*" >
                <NoFoundPage />
              </Route>
          </Switch>
        </MainContent>
        <MyFooter />
       </>
    </Router>
  )
}

export default App
