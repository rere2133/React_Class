// 導入其它的模組
import React, { useState } from 'react'
import MoneyInput from './components/MoneyInput'

function App(props) {
  //一個欄位一個狀態
  const [twd, setTwd] = useState(0)
  const [usd, setUsd] = useState(0)

  //轉換幣值小函式
  const usd2Twd = (usd) => usd * (28.53).toFixed(2)
  //foFixed 取兩位小數，四捨五入
  const twd2Usd = (twd) => (twd > 0 ? (twd / 28.53).toFixed(2) : 0)
  //注意0被除了問題，0除其他數會變無限大

  return (
    <>
      <MoneyInput
        title="c新台幣"
        money={twd}
        setMoney={(value) => {
          setTwd(value)
          setUsd(twd2Usd(value))
        }}
      />
      <br />
      <MoneyInput
        title="c美金"
        money={usd}
        setMoney={(value) => {
          setUsd(value)
          setTwd(usd2Twd(value))
        }}
      />

      {/* 1usd = 28.53twd */}
      {/*  usd*28.53  */}
      {/*  twd/28.53  */}
      {/* twd 要整數 */}
    </>
  )
}

// 輸出元件(函式)
export default App
