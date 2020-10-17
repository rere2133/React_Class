// 導入其它的模組
import React, { useState } from 'react'

function MyButtonOneSsS(props) {
  return (
    <>
      <h1>{props.text}</h1>
      <button onClick={props.onClick}>{props.title}</button>
    </>
  )
}

// 輸出元件(函式)
export default MyButtonOneSsS
