import React, {useState, useContext} from 'react'
// props,
// state > 하위 컴포넌트에서 사용하려면 props 전달
// 공통적으로 사용되는 state : user, theme
// context : props 드릴링  없이 직접 사용하도록 설정하기 위함 
// reduer, 리덕스, 몹엑스 

const App = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <SubComp1 count={count} setCount={setCount}/>
    </div>
  )
}

export default App

const SubComp1 = ({count, setCount})=>{
    return(
        <div>
            SubComp1
            <SubComp2 count={count} setCount={setCount}/>
        </div>
    )
}
const SubComp2 = ({count, setCount})=>{
    return(
        <div>
            SubComp2
            <SubComp3 count={count} setCount={setCount}/>
        </div>
    )
}
const SubComp3 = ({count, setCount})=>{
    return(
        <div>
            SubComp3 {count}
            <button onClick={()=>setCount(count+1)}>count</button>
        </div>
    )
}