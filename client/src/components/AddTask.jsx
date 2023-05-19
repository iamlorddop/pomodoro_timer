import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
export default function AddTask() {
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
    const AddTask = () => {
        return (
            <div className='task-container'>
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
            <p className='task-text'>#1</p>
            <p className='task-text'>Current task's name</p>
            <div className='tasks-wrap tasks-tasks-title'>
                Tasks
                <button className='more-button'>
                    <span></span>
                </button>
            </div>
            <AddTask/>
            <button className='button-add' onClick={addTodo}>
                <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
                <span>Add task</span>
            </button>
            <div className='tasks-wrap tasks-information'>
                <div className='tasks-information__item'>Pomos: <span>3 / 8</span></div>
                <div className='tasks-information__item'>Finish at: <span>22 : 54 (4h)</span></div>
            </div>
        </>
    )
}