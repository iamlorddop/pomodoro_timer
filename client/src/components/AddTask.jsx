import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export default function AddTask() {
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

    const AddTask = () => {
        return (
            <div className='task-container task-container-hover grab'>
                <div className='task-container__item'>
                    <div className='task-container__item__subitem task-container__item__tasks-name'>
                        <button>
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                        </button>
                        <span>Task's name</span>
                    </div>
                    <div className='task-container__item__subitem'>
                        <span>0 / 1</span>
                        <button className='more-button'>
                            <span></span>
                        </button>
                    </div>

                </div>
                <div className='task-container__note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ex nulla quas. Ab eveniet harum impedit nihil! Atque, eaque eligendi ex explicabo officia placeat quo rem repellendus suscipit veniam voluptatum?</div>
                <div className='task-container__project-name'>Project: <span>project's name</span></div>
            </div>
        )
    }

    const AddTaskInput = () => {
        return (
            <div className='task-container'>
                <div className='task-container__input-container'>
                    <input type='text' placeholder="Enter task's name" className='task-container__item__input-name'/>
                    Act / Est Pomodoros
                    <div className='task-container__subitem__input-pomos'>
                        <input type='number' value='0'/>
                        <span>/</span>
                        <input type='number' value='1'/>
                    </div>
                    <div className='task-container__subitem__input-adds'>
                        <button>+ Add Note</button>
                        <button>+ Add Project</button>
                    </div>
                </div>
                <div className='task-container__button-panel'>
                    <button>Delete</button>
                    <div>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='popup-list-container hidden'>
                <ul className='popup-list'>
                    <li className='popup-list__item'>
                        <button>
                            <span><FontAwesomeIcon icon="fa-solid fa-trash-can" /></span>
                            Clear finished tasks
                        </button>
                    </li>
                    <li className='popup-list__item'>
                        <button>
                            <span><FontAwesomeIcon icon="fa-solid fa-trash-can" /></span>
                            Clear all tasks
                        </button>
                    </li>
                    <li className='popup-list__item'>
                        <button>
                            <span><FontAwesomeIcon icon="fa-solid fa-floppy-disk" /></span>
                            Save as template
                        </button>
                    </li>
                    <li className='popup-list__item'>
                        <button>
                            <span><FontAwesomeIcon icon="fa-solid fa-plus" /></span>
                            Add from templates
                        </button>
                    </li>
                </ul>
            </div>
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
                        <div className='tasks-information__item'>Pomos: <span>3 / 8</span></div>
                        <div className='tasks-information__item'>Finish at: <span>22 : 54 (4h)</span></div>
                    </div>
                </>
                : null
            }
        </>
    )
}