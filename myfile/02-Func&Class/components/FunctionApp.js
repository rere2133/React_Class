//匯入模組（是一種物件）
import React, { useState } from 'react'
//花括號為部分匯入 //hook函式: useState, useEffect, useContext

//JSX語法
//函式型元件,開發者自己寫的元件，名稱開頭大寫
//檔案名稱＝function名稱＝匯出名稱
function FunctionApp(props) {
  console.log(props)
  //hook名字是固定的
  //呼叫useState hook,設定初始化值為0，回傳一組getter,setter
  const [total, setTotal] = useState(props.initValue)
  //回傳值，就是它的render方法
  return (
    //JSX回傳值只能有一個根，必須用<></>(fragment)包住
    <>
      {/*JSX註解*/}
      {/* <h1>{props.title}</h1>
      <h1>{total}</h1>
      <button onClick={() => {
        setTotal(total + 1)
        console.log(total)
        localStorage.setItem('total',total)
      }}>+1</button> */}
      {/* setTotal執行是異步，執行需要時間，會比console.log晚執行 */}
     
     {/* 解決方式 */}
      <h1>{props.title}</h1>
      <h1>{total}</h1>
      <button onClick={() => {
        const newTotal = total + 1
        setTotal(newTotal)
        console.log(newTotal)
        localStorage.setItem('total',newTotal)
      }}>+1</button>

      <button onClick={() => {
        const newTotal = total - 1
        setTotal(newTotal)
        console.log(newTotal)
        localStorage.setItem('total',newTotal)
      }}>-1</button>
    </>
  )
}

//匯出元件（函式）
export default FunctionApp
