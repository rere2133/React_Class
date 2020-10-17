// 導入react函式庫
import React from 'react'

// 繼承類別
class AppClass extends React.Component {
  // 建構式
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }

  // 每秒指定新的(日期時間)狀態
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  // 元件移除時要清除timerId
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({ date: new Date() })
  }

  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    return <>{this.state.date.toLocaleTimeString()}</>
  }
}

export default AppClass
