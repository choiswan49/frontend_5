import React, {useState} from 'react'
import { ImHeadphones } from "react-icons/im";
import { MdLaptopChromebook } from "react-icons/md";
import './Tabs.css'

const tabDatas = [
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
const Tabs = () => {
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