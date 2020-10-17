// 導入其它的模組
import React, { useState } from 'react'
import BMICount from './components/BMICount'

function App(props) {
  //一個欄位一個狀態
  const [hight, setHight] = useState()
  const [weight, setWeight] = useState()
  const [num, setNum] = useState()

  const bmi = (hight, weight) => (weight / Math.pow(hight / 100, 2)).toFixed(1)

  return (
    <>
      <h2>
        請填入你的身高與體重，計算 BMI 身體質量指數，了解你現在的體重狀況。
      </h2>
      <BMICount
        title="身高（公分）"
        data={hight}
        setData={(value) => {
          setHight(value)
        }}
      />
      <br />
      <BMICount
        title="體重（公斤）"
        data={weight}
        setData={(value) => {
          setWeight(value)
        }}
      />
      <br />
      <button onClick={() => setNum(bmi(hight, weight))}>計算</button>
      <h3>你的 BMI 身體質量指數為:{num}</h3>
    </>
  )
}

// 輸出元件(函式)
export default App
