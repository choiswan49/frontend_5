import React, {useRef, useState} from 'react'

const items = [
    {
        id : 1,
        checked : false,
        todo : 'html'
    },
    {
        id : 2,
        checked : false,
        todo : 'css'
    },
]
const Todos = () => {
    const [todo, setTodo] = useState(''); // 낱개
    const [todos, setTodos] = useState(items); // 모든 todo
    const todoRef = useRef();
    const addItem = ()=>{
        // const todo = document.querySelector('#inputtodo').value
        const id = todos[todos.length - 1].id + 1
        const item = todoRef.current.value;
        const newItem = {
            id,
            checked : false,
            todo : item
        }
        // console.log(item)
        // items.push(item)
        setTodos([...todos, newItem]) // push로는 초기화 X
        todoRef.current.value = '';
    }
    const checkedHandle = (id)=>{
        // console.log(id);
        const update = todos.map(todo=>todo.id === id ? 
            {...todo, checked : !todo.checked} : todo) // 순서 주의
        // const find = todo.find(todo=>todo.id ===id);
        // const fUpdate = {checked : !find.checked, ...todo}
        setTodos(update);
    }
    const deleteHandle = (id)=>{
        const filtered = todos.filter(todo=>todo.id !== id)
        setTodos(filtered);
    }
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>할일 등록</div>
            <input type='text' id='inputtodo' ref={todoRef}/>
            <button onClick={addItem}>등록</button>
        </form>
        <div className='todos-list'>
            <ul>
                {
                todos.map((todo,index)=>(
                    <li>
                        <span>{todo.id}</span>
                        <input type='checkbox' checked={todo.checked} id={`todo${todo.id}`}
                            onChange={()=>checkedHandle(todo.id)}
                        />
                        <label htmlFor={`todo$todo.id`}
                            style={{textDecoration : todo.checked ? 'line-through' : 'none'}}
                        >{todo.todo}</label>
                        <button onClick={()=>deleteHandle(todo.id)}>삭제</button>
                    </li>
                ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Todos