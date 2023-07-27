import React, {useState} from 'react'

const Login = () => {
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const submitHandle = (event) =>{
        event.preventDefault()
    }
    const loginHandle = ()=>{
        const user = {userId, userPwd}
        console.log(user);
    }
  return (
    <div>
        <form className='form' onSubmit={(e)=>e.preventDefault()}>
        {/* <form className='form' onSubmit={(event)=>submitHandle(event)}> */}
            <div>
                <label htmlFor='userId'>아이디</label>
                <input type='text' id='userId'
                    onChange={(e)=>setUserId(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='userPwd'>비밀번호</label>
                <input type='password' id='userPwd'
                    onChange={(e)=>setUserPwd(e.target.value)}
                />
            </div>
            <button onClick={loginHandle}>로그인</button>
        </form>
    </div>
  )
}

export default Login