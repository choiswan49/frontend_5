import React, {useState, useEffect, useRef} from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const TODO_URL = `http://localhost:3500/todos`

    const todoRef = useRef();
    const [todo, setTodo]  = useState();

    const getHandle = async()=>{
        // const rows = await fetch(TODO_URL);
        // const datas = await rows.json();
        setTodos(datas)
        // console.log(todos.length)

        fetch(TODO_URL)
        .then(res=>res.json())
        .then(res=>{
            // console.log(res)
            setTodos(res)
        })
    }
    const postHandle = async()=>{
        fetch(TODO_URL, {
            method : "POST",
            // body : JSON.stringify({"todo" : todo}),
            body : JSON.stringify({"todo" : todoRef.current.value}),
            headers : {"Content-type" : 'application/json; charset=utf-8'}
        })
        .then(res=>res.json())
        .then(res=>{
            // console.log(res);
            setTodos(res)
        })
    }
    const putHandle = async(id)=>{
        fetch(TODO_URL, {
            method : "PUT",
            body : JSON.stringify({"id" : id}),
            headers : {"Content-type" : 'application/json; charset=utf-8'}
        })
        .then(res=>res.json())
        .then(res=>{
            // console.log(res)
            setTodos(res)
        })
    }
    const deleteHandle = async(id)=>{
        fetch(`${TODO_URL}/${id}`, {
            method : "DELETE",
        })
        .then(res=>res.json())
        .then(res=>{
            // console.log(res)
            setTodos(res)
        })
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