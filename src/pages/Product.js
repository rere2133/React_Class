import React, { useState, useEffect } from 'react'
import { Link, withRouter } from "react-router-dom"
import Breadcrumb from '../components/Breadcrumb'

function Product(props){
    console.log(props.match.params)
    return<>
    <h1>Product</h1>
    <Breadcrumb/>
    </>
}

export default withRouter(Product)