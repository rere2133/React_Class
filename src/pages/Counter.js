import React,{useState, useEffect} from 'react'

function Counter(props){
    const [total, setTotal]=useState(0)
    const [dataLoading, setDataLoading]= useState(false)

    async function getTotalFromServer(){
        setDataLoading(true)

        const url = 'http://localhost:5555/counter/1'

        const request = new Request(url,{
            method:'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type':'application/json',
            }),
        })
        const response = await fetch(request)
        const data = await response.json()
        console.log(data)

        setTotal(data.total)
    }

    //componentDidMount
    useEffect(()=>{
        getTotalFromServer()
    },[total])

    //每次total資料有改變時，2秒後關起載入指示
    useEffect(()=>{
        setTimeout(()=>setDataLoading(false),2000)
    })

    const loading=( 
        <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
        </div>
      )

    const display=(
        <>
        <h1>{total}</h1>
        <button onClick={() => {}}>+1</button>
        <button onClick={() => {}}>-1</button>
      </>
    )

    


    return dataLoading? loading : display
}
export default Counter