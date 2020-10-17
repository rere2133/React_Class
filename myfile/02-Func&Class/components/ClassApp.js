//匯入react函式庫
import React from 'react'
import PropTypes from 'prop-types'

//繼承類別
class ClassApp extends React.Component {
  //建構式（方法）
  constructor(props) {
    super(props) //呼叫上層類別的建構式
    this.state = {
      // total: 0,
      total: props.initValue,
    }
    //物件，表元件內部狀態
  }

  //回傳值
  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    console.log(this.props)
    let initValue = this.props.initValue ? this.props.initValue : this.total

    return (
      <>
        <h1>{this.props.title}</h1>
        {/* 自動得到props */}
        <h1>{this.state.total}</h1>
        {/* <h1>{initValue}</h1> */}
        {/* 設定/更動狀態要呼叫this.setState方法，給定之後狀態要改變的物件樣子 */}
        <button onClick={() => this.setState({ total: this.state.total + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ total: this.state.total + 1 })}>
          -1
        </button>
      </>
    )
  }
}

//檢查
ClassApp.propTypes={
  initValue: PropTypes.number.isRequired,
  title: PropTypes.string,
}
//設定預設值
ClassApp.defaultProps={
  initValue: 0,
  title:'沒標題',
}
export default ClassApp
