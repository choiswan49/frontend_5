import React, {useState} from 'react'
import { ImHeadphones } from "react-icons/im";
import { MdLaptopChromebook } from "react-icons/md";
import './Tabs.css'


const Tabs = ({tabDatas}) => {
    const [toggle, setToggle] = useState(0);  // 0 1 2 3 4
  return (
    <div className='tabs-container'>
        <ul className='tab-btns'>
            {
                tabDatas.map((item, index)=>(
                    <>
                        <li className={toggle===index ? 'active' : ''}
                            onClick={()=>{setToggle(index)}}
                        >
                            <span>{item.title}</span>
                        </li>
                    </>
                ))
            }
        </ul>
        <div class="tab-contents">
            {
                tabDatas.map((item, index)=>(
                    <>
                    <div className={toggle===index ? 'active' : ''}
                        onClick={()=>{setToggle(index)}}
                    >
                        {item.content}
                    </div>
                    </>
                ))
            }
        </div>

        
    </div>
  )
}

export default Tabs