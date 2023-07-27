import React, {useState, useRef} from 'react'
// hook

const Login = () => {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const userIdRef = useRef()
    const userPwdRef = useRef()

    // userIdRef.current.focus();
    
    // console.log(userIdRef)

    const idChangeHandle = (e)=>{
        setUserId(e.target.value);
        console.log(userIdRef.current.value)
    }
    const submitHandle = (event) =>{
        event.preventDefault()
    }
    const loginHandle = ()=>{
        const user = {userId, userPwd}
        console.log(user);
        // setUserId('');
        // setUserPwd('');
        userIdRef.current.value = '';
        userPwdRef.current.value = '';
    }
  return (
    <div>
        <form className='form' onSubmit={(e)=>e.preventDefault()}>
        {/* <form className='form' onSubmit={(event)=>submitHandle(event)}> */}
            <div>
                <label htmlFor='userId'>아이디</label>
                <input type='text' id='userId'
                    onChange={(e)=>idChangeHandle(e)}
                    value={userId}
                    ref={userIdRef}
                />
            </div>
            <div>
                <label htmlFor='userPwd'>비밀번호</label>
                <input type='password' id='userPwd'
                    onChange={(e)=>setUserPwd(e.target.value)}
                    value={userPwd}
                    ref={userPwdRef}
                />
            </div>
            <button onClick={loginHandle}>로그인</button>
        </form>
    </div>
  )
}

export default Login