import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import AddTaskInput from './AddTaskInput'
import AddTask from "./AddTask";

library.add(fas)
export default function AddTaskPanel() {
    const [todoInput, setTodoInput] = useState(0)
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [note, setNote] = useState('')
    const [projectName, setProjectName] = useState('')
    const [actValue, setActValue] = useState('0')
    const [eastPomosValue, setEastPomosValue] = useState('1')

    const addTodo = () => {
        if (todo !== '') {
            setTodos([...todos, todo])
            setTodo('')
        }
    }

    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text
        })
        setTodos(newTodos)
    }

    const handleClick = () => {
        setTodoInput((count) => count + 1)
    }

    return (
        <>
            {todos?.length > 0 ?
                <>
                    <p className='task-text'>#1</p>
                    <p className='task-text'>Current task's name</p>
                    <div className='tasks-wrap tasks-tasks-title'>
                        Tasks
                        <button className='more-button'>
                            <span></span>
                        </button>
                    </div>
                </>
                : null
            }
            {
                todoInput ?
                    <>
                        <AddTask list={todos} name={todo} noteText={note} project={projectName} act={actValue} eastPomos={eastPomosValue}/>
                        <AddTaskInput todo={todo} setTodo={setTodo} note={note} setNote={setNote} projectName={projectName} setProjectName={setProjectName} actValue={actValue} setActValue={setActValue} eastPomosValue={eastPomosValue} setEastPomosValue={setEastPomosValue} remove={deleteTodo} addTodo={addTodo}/>
                    </>
                    : null
            }
            <button className='button-add' onClick={handleClick}>
                <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                <span>Add task</span>
            </button>
            {todos?.length > 0 ?
                <>
                    <div className='tasks-wrap tasks-information'>
                        <div className='tasks-information__item'>Pomos: <span>{actValue} / {eastPomosValue}</span></div>
                        <div className='tasks-information__item'>Finish at: <span>22 : 54 (4h)</span></div>
                    </div>
                </>
                : null
            }
        </>
    )
}