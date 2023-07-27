import React, {useEffect, useState, createContext} from 'react'
// useEffect
// context : props drilling을 편리하게 사용하도록 만든 도구
// props
// state

// 리엑트에서 사용되는 라이브러리 : props 다루거나, state
// react-icon : context
// animation
// chart

const App = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    // UI 화면 바꾸는 용도
    // console.log('1. 처음 실행')
    // useEffect : 화면이 바뀌고 난 후에 useEffect 호출
    useEffect(()=>{
        console.log('2. 항상 실행')
        // 맨처음 화면이 로딩될 때, 화면이 바뀌면 호출
    })
    useEffect(()=>{
        console.log('1. 맨처음 한 번 실행')
    }, [])
    useEffect(()=>{
        console.log('3. 문자가 바뀔 때만 실행')
    }, [name])
    useEffect(()=>{
        console.log('4. count가 바뀔 때만 실행')
    }, [count])
  return (
    <div>
        <div>count {count} <button onClick={()=>setCount(count+1)}>count add</button>
        </div>
        <div>name {name}
            <input type='text' id='name' 
                onInput={(e)=>setName(e.target.value)}
            />

        </div>
    </div>
  )
}

export default App