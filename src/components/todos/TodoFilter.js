import React from 'react'
import { Button } from 'react-bootstrap'

function TodoFilter(props) {
  return (
    <>
      <Button className="ml-3" variant="primary">
        All
      </Button>
      <Button
        className="ml-2"
        variant="primary"
        // onClick={()=>}
      >
        Done
      </Button>
      <Button className="ml-2" variant="primary">
        Uncompleted
      </Button>
    </>
  )
}
export default TodoFilter
