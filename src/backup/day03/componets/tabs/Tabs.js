import React, {useState} from 'react'
import { ImHeadphones } from "react-icons/im";
import { MdLaptopChromebook } from "react-icons/md";
import './Tabs.css'

const tabDatas = [
    {
        id : 1,
        content : '주식 콘텐츠',
        left : 'left 주식'
    },
    {
        id : 2,
        content : '영어 콘텐츠',
        left : 'left 영어'
    },
    {
        id : 3,
        content : '고전 콘텐츠',
        left : 'left 고전'
    },
    {
        id : 4,
        content : '인테리어 콘텐츠',
        left : 'left 인테리어'
    },
    {
        id : 5,
        content : '다이어트 콘텐츠',
        left : 'left 다이어트'
    }
]
const Tabs = () => {
    const [toggle, setToggle] = useState(0);  // 0 1 2 3 4
  return (
    <>
    <div className='tabs-container'>
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
        <ul className='tab-btns'>
            {
                tabDatas.map((item, index)=>(
                    <>
                        <li className={toggle===index ? 'active' : ''}
                            onClick={()=>{setToggle(index)}}
                        >
                            <span>{item.id}</span>
                        </li>
                    </>
                ))
            }
        </ul>
        <div className='side-container'>
            {
                tabDatas.map((item, index)=>(
                    <>
                    <div className={toggle===index ? 'active' : ''}>
                        {item.left}
                    </div>
                    </>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Tabs