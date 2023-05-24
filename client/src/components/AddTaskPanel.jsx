import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import AddTaskInput from './AddTaskInput'

library.add(fas)
export default function AddTaskPanel() {
    const count = 0
    const [todoinput, setTodoinput] = useState(0)
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

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
        setTodoinput((count) => count + 1)
    }

    return (
        <>
            {todoinput ?
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
            {[...Array(todoinput)].map((item, i) => <AddTaskInput key={i}/>)}
            <button className='button-add' onClick={handleClick}>
                <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                <span>Add task</span>
            </button>
            {todoinput ?
                <>
                    <div className='tasks-wrap tasks-information'>
                        <div className='tasks-information__item'>Pomos: <span>0 / 1</span></div>
                        <div className='tasks-information__item'>Finish at: <span>22 : 54 (4h)</span></div>
                    </div>
                </>
                : null
            }
        </>
    )
}