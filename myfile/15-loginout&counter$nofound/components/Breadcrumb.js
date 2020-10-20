import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

function Breadcrumb(props){
    console.log(props)
    let path = '';
    const pathname = props.location.pathname;
    switch(pathname){
        case '/about':
            path = '關於'
            break;
        case '/product':
            path='產品'
            break;
        default:
            path=''
    }
return(
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                <Link to="/" >Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                {path}
                </li>
            </ol>
        </nav>
    </>
)
}

export default withRouter(Breadcrumb)