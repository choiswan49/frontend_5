import React, {useEffect, useState, createContext} from 'react'
import { useContext } from 'react';
// useEffect
// context : props drilling을 편리하게 사용하도록 만든 도구
// props
// state

// 리엑트에서 사용되는 라이브러리 : props 다루거나, state
// react-icon : context
// animation
// chart

// Outlet : 컴포넌트 내에 다른 컴포넌트를 포장
const ThemeContextProvider = ({children})=>{
    const [darkMode, setDarkMode] = useState(false);
    return(
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children }
        </ThemeContext.Provider>
    )
}
const ThemeContext = createContext();

const CountContextProvider = ({children})=>{
    const [count, setCount] = useState(0);
    return(
        <CountContext.Provider value={{count, setCount}}>
            {children }
        </CountContext.Provider>
    )
}
const CountContext = createContext();

const App = () => {
  return (
    <ThemeContextProvider>
        <CountContextProvider>
            <div>
                DarkMode
                <Page />
            </div>
        </CountContextProvider>
    </ThemeContextProvider>
  )
}

export default App

const Page = ()=>{
    return(
        <>
        <Header />
        <Section />
        <Footer />
        </>
    )
}
// const style = {
//     background : 'black',
//     color : 'white'
// }
const Header = ()=>{
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    return(
        <header style={{background : darkMode ? 'black'  :'white'}}>header
            <button onClick={()=>setDarkMode(!darkMode)}>darkMode</button>
        </header>
    )
}
const Section = ()=>{
    const {darkMode} = useContext(ThemeContext);
    const {count, setCount} = useContext(CountContext)
    return(
        <section
            style={{background : darkMode ? 'black'  :'white'}}
        >{count}
            <button onClick={()=>setCount(count+1)}>click</button>
        </section>
    )
}
const Footer = ()=>{
    const {darkMode} = useContext(ThemeContext);
    return(
        <footer
            style={{background : darkMode ? 'black'  :'white'}}
        >footer</footer>
    )
}