import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const TODO_URL = `http://localhost:3500/todos`
    const [isLoading, setIsLoading] = useState(true); // loading 제어 state

    const todoRef = useRef();
    const [todo, setTodo]  = useState();

    const getHandle = async()=>{
        const rows = await axios.get(TODO_URL)
        setTodos(rows.data) // data에만 있음

        setIsLoading(false);
    }
    const postHandle = async()=>{
        const rows = await axios.post(TODO_URL, {todo})
        setTodos(rows.data)

        setTodo('')
    }
    const putHandle = async(id)=>{
        const rows = await axios.put(TODO_URL, {id})
        setTodos(rows.data)
    }
    const deleteHandle = async(id)=>{
        const rows = await axios.delete(`${TODO_URL}/${id}`)
        setTodos(rows.data)
    }

    useEffect(()=>{
        getHandle();
    }, [todos])

  return (
    <div>
        {/* <button onClick={getHandle}>GET</button> */}
        <div>
            <input ref={todoRef} value={todo} 
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button onClick={postHandle}>등록</button>
        </div>
        {/* <button onClick={()=>putHandle(1)}>PUT</button> */}

        {
            isLoading ? <div>Loading...</div> : null
        }
        

        {
            !todos.length ? <div>데이터를 찾을 수 없습니다</div> : 
            <ul>
                {
                    todos.map(todo=>(
                        <li key={todo.todo}>
                            <span>{todo.id}</span>
                            <input type='checkbox' checked={todo.checked} 
                                onChange={()=>putHandle(todo.id)}
                                id={`complete${todo.id}`}
                            />
                            <label htmlFor={`complete${todo.id}`}
                                style={{
                                    textDecoration : todo.checked ? 'line-through' : 'none'
                                }}
                            >{todo.todo}</label>
                            <button onClick={()=>deleteHandle(todo.id)}>DELETE</button>
                        </li>
                    ))
                }
            </ul>
        }
    </div>
  )
}

export default Todo