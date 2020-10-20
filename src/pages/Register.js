import React, { useState, useEffect } from 'react'
import { Link, withRouter} from "react-router-dom"

function Register(props){
    console.log(props)
    return<>
    <h1>Register</h1>
    <p>註冊頁面</p>
    {/* <h2>目前狀態:{isAuth?'登入':'登出'}</h2> */}

<div className="row mt-3">
<form className="col-lg-6">
<div className="form-group">
        <label htmlFor="name">姓名</label>
        <input type="text" className="form-control" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">e-mail</label>
        <input type="text" className="form-control" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="account">帳號</label>
        <input type="email" className="form-control" id="account" name="account" aria-describedby="emailHelp"/>
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group">
        <label htmlFor="password">密碼</label>
        <input type="password" className="form-control" id="password" name="password" />
      </div>
      <div className="form-group">
        <label htmlFor="passwordCheck">確認密碼</label>
        <input type="password" className="form-control" id="passwordCheck" name="passwordCheck" />
      </div>
     
      <button type="submit" className="btn btn-primary">註冊</button>
    </form>
</div>



    
  
    
    
    </>
}

export default withRouter(Register)