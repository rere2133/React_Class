// 導入其它的模組
import React, { useState } from 'react'

import MyButtonOneSsS from './components/MyButtonOne-SsS'
import MyButtonTwoSsS from './components/MyButtonTwo-SsS'

function App(props) {
  const [text, setText] = useState('')

  return (
    <>
      <h1>MyButtonOne</h1>
      {/* 父母元件利用props傳給子女，呈現文字資料 */}
      <MyButtonOneSsS title="我要接資料(One)" text={text} />
      <hr />
      <h1>MyButtonTwo</h1>
      {/* 父母元件利用props傳給子女，準備要接收資料的函式setText */}
      <MyButtonTwoSsS title="我要傳資料(Two)" setText={setText} />
    </>
  )
}

// 輸出元件(函式)
export default App


