//匯入模組（是一種物件）
import React from 'react'
//匯入元件
import ClassApp from './components/ClassApp'
import FunctionApp from './components/FunctionApp'

function App() {
  return (
    <>
      <ClassApp title="類別型元件" initValue={98} />
      <ClassApp/>
      <FunctionApp title="函式型元件" initValue={100} />
      {/* 初始value只會在畫面呈現前執行一次，不建議這樣用 */}
    </>
  )
}

//匯出元件（函式）
export default App
