import React from 'react'
import { Collepse } from './componets/collepse/Collepse'
import Accordion from './componets/accordion/Accordion'
import Tabs from './componets/tabs/Tabs'
import './App.css';
import Sidebar from './componets/sidebar/Sidebar';

function App() {
  return (
    <div>
        {/* 여러개를 써도 각자 동작 */}
        {/* <Collepse />
        <Collepse />
        <Collepse />
        <Collepse /> */}

        {/* <Accordion /> */}

        {/* < Tabs /> */}

        <Sidebar />
    </div>
  )
}

export default App