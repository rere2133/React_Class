import React from 'react'

function BMICount(props) {
  return (
    <>
      {props.title}
      <input
        type="text"
        value={props.data}
        onChange={(e) => {
          props.setData(+e.target.value)
        }}
      />
    </>
  )
}

export default BMICount
