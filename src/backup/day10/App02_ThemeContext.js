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

const ThemeContext = createContext();

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(()=>{
        // clearTimeout()
    }, [darkMode])
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <div>
            DarkMode
            <Page />
        </div>
    </ThemeContext.Provider>
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
    return(
        <section
            style={{background : darkMode ? 'black'  :'white'}}
        >section</section>
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