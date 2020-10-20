import React, { useState, useEffect } from 'react'
import {withRouter} from 'react-router-dom'
import { Button } from  'react-bootstrap'

function NotFoundPage(props) {
    // 或使用useHistory勾子也可以達到同樣效果
    // let history = useHistory()
  return (
    <>
      <h1>找不到頁面</h1>
      <Button onClick={()=>{
          props.history.push('/product')
      }}>回產品頁</Button>
      <Button 
      className = "ml-2"
      onClick={()=>{
          props.history.goBack()
      }}>回上一頁</Button>
    </>
  )
}

export default withRouter(NotFoundPage)