import React, { useState, useEffect } from 'react'
import { Link, withRouter, Redirect} from "react-router-dom"
import Breadcrumb from '../components/Breadcrumb'

function Product(props){
    console.log(props.match.params)
    const { isAuth } = props

    if (isAuth === false) return <Redirect to="/register" />
    return<>
    <h1>Product</h1>
    <Breadcrumb/>
    <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>

    </>
}

export default withRouter(Product)