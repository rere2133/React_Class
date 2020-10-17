import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// 改為台灣繁體中文的日期樣式
// 參考：https://github.com/Hacker0x01/react-datepicker/#localization
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { zhTW } from 'date-fns/esm/locale'
registerLocale('zh-TW', zhTW)

function AgeCheck(props) {
  const [startDate, setStartDate] = useState(new Date())
  const [age, setAge] = useState(0)

  //birthday(Date object) 365.25*24*60*60*1000
  const calcAge = (birthday) => ~~((Date.now() - birthday) / 31557600000)

  //startDate變動的時候觸發useEffect
  useEffect(() => {
    console.log(typeof startDate)
    setAge(calcAge(startDate))
  }, [startDate])

  return (
    <>
      <h1 className="mt-5 titleStyle">範例：日期選擇，檢查是否滿18歲</h1>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        locale="zh-TW"
        onChange={(date) => setStartDate(date)}
      />
      <h3
        style={{
          fontSize: '10px',
          padding: '10px',
        }}
      >
        {age < 18 ? '你未滿十八歲喔！' : '滿十八歲'}
      </h3>
    </>
  )
}

export default AgeCheck
