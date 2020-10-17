// 導入其它的模組
import React, { useState } from 'react'



function MoneyInput(props) {

  return (
    <>
      {props.title}
      <input 
      type="text" 
      value={props.money} 
      onChange={(event)=>{
        // 轉成數字進入state中
      props.setMoney(+event.target.value)
      }}
       />
    </>
  )
}

// 輸出元件(函式)
export default MoneyInput


