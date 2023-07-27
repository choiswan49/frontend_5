import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Board from './containers/Board'
import Theme from './components/Theme'
import Coins from './containers/coins'
import Fade from './components/fadeinout/Fade'

const datas = [
    {
        title : "주식",
        content : '주식 콘텐츠'
    },
    {
        title : "영어",
        content : '영어 콘텐츠'
    },
    {
        title : "고전",
        content : '고전 콘텐츠'
    },
    {
        title : "인테리어",
        content : '인테리어 콘텐츠'
    },
    {
        title : "다이어트",
        content : '다이어트 콘텐츠'
    }
]

const App = () => {
    const [theme, setTheme] = useState(false)
    const logo = 'KOREA';
  return (
    <div>
        <Theme theme={theme} setTheme={setTheme}/>
        <Header logo={logo} theme={theme}/>
        {/* <Board theme={theme} tabDatas={datas}/> */}
        {/* <Coins /> */}
        <Fade />
        <Footer theme={theme}/>
    </div>
  )
}

export default App