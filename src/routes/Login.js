import React, {useState, useRef} from 'react'
import './Login.css'
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Login = ({user, setUser}) => {
    const [pwShow, setPwShow] = useState(false);
    const useridRef = useRef();
    const userpwRef = useRef();

    const loginHandle = ()=>{
        //err
        if (useridRef.current.value === ''){
            alert('id를 입력하세요')
            useridRef.current.focus();
        }else{
            const currentUser = {
                // name : document.querySelector('#user_id').value
                name : useridRef.current.value
            }
            setUser(currentUser)
            useridRef.current.value=''
            userpwRef.current.value=''
        }
        
    }
  return (
    <div className='login-container'>
        <form className='login-content'
            onSubmit={(e)=>e.preventDefault()}
        >
            <input type='text' 
                placeholder='아이디'
                autoFocus
                id='user_id'
                ref={useridRef}
            /> 
            <input type={ !pwShow ? 'password' : 'text'}
                placeholder='비밀번호'
                
                id='user_pw'
                ref={userpwRef}
            />
            <div role='button' className='button'
                onClick={()=>setPwShow(!pwShow)}
            >
                {
                    pwShow ? <BsEyeFill /> : <BsEyeSlashFill />
                }
            </div>
            
            <button onClick={loginHandle}>로그인</button>
        </form>
    </div>
  )
}

export default Login