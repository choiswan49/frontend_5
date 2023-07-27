import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
    const [value, setValue] = useState();
    const [tickers, setTickers] = useState([])
    const API = `https://api.coinpaprika.com/v1/tickers`

    const apiHandel = async ()=>{
        const datas = await axios.get(API)
        // console.log(datas.data)
        // setTickers(datas.data)
    }
    const inputHandle = (e)=>{
        console.log(e.target.value)
    }

    useEffect(()=>{
        // 항상 실행
        // inputHandle();
        console.log('항상 실행')
    })
    useEffect(()=>{
        // loading 화면 설계 했을 때
        console.log('맨처음 한 번 실행')
    }, [])
    useEffect(()=>{
        // 
        console.log('배열에 지정된 변수 값이 바뀌면 실행')
    }, [tickers]) // 배열에 종속적으로 실행
  return (
    <div>
        <input type='text' onChange={(e)=>setValue(e.target.value)} 
            value={value}
        />
    </div>
  )
}

export default App