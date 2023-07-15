import Footer from "./component/footers/Footer"
import Header from "./component/headers/Header"
import Section from "./component/sections/Section"
import './App.css';
import logo from '../logo.svg'

/*
const App = ()=>{
    const textLogo = "React!!!";
    const today = new Date();

    return(
        <div>
            <Header logo={logo} textlogo={"React"}/>
            <Section />
            <Footer year={today.getFullYear()}/>
        </div>
    )
}
*/
import {useState} from 'react';
/*
const App = ()=>{
    const textLogo = "React!!!";
    const today = new Date();
    let num = 0; // 화면 갱신하지 못함
    const [uiNum, setUiNum] = useState(0);  // 화면을 갱신하는 함수

    setInterval(()=>{
        num++;
        console.log(num);

        // setUiNum(uiNum=>uiNum+1);
        setUiNum(uiNum+1);
    },1000)
    return(
        <div>
            <h1>hello {textLogo}</h1>
            <div>{uiNum}</div>
        </div>
    )
}
*/
const App = ()=>{
    const textLogo = "React!!!";
    const today = new Date();
    let num = 0; // 화면 갱신하지 못함
    const [uiNum, setUiNum] = useState(0);  // 화면을 갱신하는 함수

    // document.querySelector('button').addEventListener('click', ()=>{
    //     setUiNum(uiNum+1);
    // })
    
    return(
        <div>
            <h1>hello {textLogo}</h1>
            <div></div>
            <button onClick={()=>setUiNum(uiNum+1)}>uiNum : {uiNum}</button>
            <button onMouseOver={()=>console.log('mouseover')}
                    onMouseOut={()=>console.log('mouseOut')}
                    >마우스오버/아웃</button>

        </div>
    )
}

export default App