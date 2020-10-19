import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"

function Product(props){
    let { id } = useParams()
    console.log(props)
    return<>
    <h1>Product</h1>
    <h3>{id}</h3>
    </>
}

export default Product