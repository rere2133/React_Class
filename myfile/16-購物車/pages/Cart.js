import React, { useState, useEffect } from 'react'

function Cart() {
    const[mycart, setMycart] =useState([])
    const[mycartDisplay, setMycartDisplay] =useState([])
    const[dataLoading, setDataLoading] =useState(false)
    
    function getCartFromLocalStorage(){
        //開啟載入指示
        setDataLoading(true)

        const newCart = localStorage.getItem('cart') || []
        console.log(JSON.parse(newCart));

        //設定資料
        setMycart(JSON.parse(newCart))
}

    //一開始就會開始載入資料
    useEffect(()=>{
        getCartFromLocalStorage()
    },[])

    //每次mycart資料更新，1秒後關閉載入指示
    //componentDidUpdate
    useEffect(()=>{
        setTimeout(()=> {setDataLoading(false)},1000)

        let newMycartDisplay = []

        console.log('mycartDisplay',mycartDisplay)
        console.log('mycart',mycart)

        //尋找mycartDisplay
        for(let i = 0; i<mycart.length ; i++){
            //尋找mycartDisplay有無此mycart[i].id
            //有找到就回傳陣列成員index
            //沒找到回傳-1
            const index = newMycartDisplay.findIndex(
                (value) => value.id === mycart[i].id
              )
            //有的話amount+1
            if(index !== -1){
                console.log('findindex',index)
                newMycartDisplay[index].amount += mycart[i].amount
            }else{
                //沒有的話把項目加入，amount為1
                const newItem = {...mycart[i]}
                newMycartDisplay = [...newMycartDisplay,newItem]
            }
        }
        console.log(newMycartDisplay)
        setMycartDisplay(newMycartDisplay)
    },[mycart])

    //計算總價函式
    function sum(items){
        let total = 0 
        for(let i=0; i<items.length; i++){
            total += items[i].amount*items[i].price
        }
        return total
    }


  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      {/* <ul className="list-group"> */}
      <ul className="d-flex justify-content-around font-weight-bold text-right">
            <li className=" list-group-flush col-3 list-unstyled">產品</li>
            <li className="list-group-flush col-3 list-unstyled">數量</li>
            <li className="list-group-flush col-3 list-unstyled">單價</li>
            <li className="llist-group-flush col-3 list-unstyled">小計</li>
            </ul>
<hr/>
      {mycartDisplay.map((value,index)=>{
          return(
            <ul  key={value.id} className="d-flex justify-content-around align-items-center text-right">
            <li className="list-group-flush col-3 list-unstyled my-5">{value.name}</li>
            <li className="list-group-flush col-3 list-unstyled">{value.amount}</li>
            <li className="list-group-flush col-3 list-unstyled">{value.price}</li>
            <li className="llist-group-flush col-3 list-unstyled font-weight-bold">{value.amount * value.price}</li>
            </ul>
            
          )
      })}
      {/* </ul> */}
      <hr/>
      <h3 className="text-right">總價：{sum(mycartDisplay)}</h3>
    </>
  )

  return (
    <>
      <div className="container">{dataLoading? loading: display}</div>
    </>
  )
}

export default Cart