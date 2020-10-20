import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function Login(props){
    const {isAuth, setIsAuth} = props


    return(
    <>
    <h1>登入頁面</h1>
    <h2>目前狀態:{isAuth?'登入':'登出'}</h2>
    <Button onClick={()=>setIsAuth(true)}>登入</Button>
    <Button 
      className = "ml-2"
      onClick={()=>setIsAuth(false)}>登出</Button>

<div className="row mt-3">
<form className="col-lg-6">
      <div className="form-group">
        <label for="account">帳號</label>
        <input type="email" className="form-control" id="account" name="account" aria-describedby="emailHelp"/>
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group">
        <label for="password">密碼</label>
        <input type="password" className="form-control" id="password" name="password" />
      </div>
      <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="rememberMe"/>
          <label class="form-check-label" for="rememberMe">記得我</label>
      </div>
      
      <button type="button" className="btn btn-primary">登入</button>
    </form>
</div>

    </>
    )
}

export default Login