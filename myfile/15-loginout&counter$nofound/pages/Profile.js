import React, { useState, useEffect } from 'react'

function Profile(props){
    const {isAuth, setIsAuth} = props


    return(
    <>
    <h1>編輯個人資料</h1>
    <h2>目前狀態:{isAuth?'登入':'登出'}</h2>

<div className="row mt-3">
<form className="col-lg-6">
      <div className="form-group">
        <label for="account">帳號</label>
        <input type="email" className="form-control" id="account" name="account" aria-describedby="emailHelp"/>
        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div>
      <div className="form-group">
        <label for="name">姓名</label>
        <input type="text" className="form-control" id="name" name="name" />
      </div>
      <div className="form-group">
        <label for="email">e-mail</label>
        <input type="text" className="form-control" id="email" name="email" />
      </div>
      <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="rememberMe"/>
          <label class="form-check-label" for="rememberMe">記得我</label>
        </div>
      
      <button type="submit" className="btn btn-primary">修改</button>
    </form>
</div>



    
  
    
    </>
    )
}
export default Profile