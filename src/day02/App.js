import Footer from "./component/footers/Footer"
import Header from "./component/headers/Header"
import Section from "./component/sections/Section"
import './App.css';
import logo from '../logo.svg'

const App = ()=>{
    const textLogo = "React!!!"
    return(
        <div>
            <Header logo={logo} textlogo={"React"}/>
            {/* <Header logo={logo} textlogo={textLogo}/> */}
            <Section />
            <Footer />
        </div>
    )
}

export default App