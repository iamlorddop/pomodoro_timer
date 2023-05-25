import React from 'react'
import { useState } from 'react'
import AddTask from './AddTask'

export default function AddTaskInput({todo, setTodo, note, setNote, projectName, setProjectName, actValue, setActValue, eastPomosValue, setEastPomosValue, remove, addTodo}) {
    const [showNote, setShowNote] = useState(false)
    const [showProject, setShowProject] = useState(false)
    const [save, setSave] = useState(false)
    const [cancel, setCancel] = useState(false)

    const handleClickSave = () => {
        setSave(true)
    }

    const handleClickCancel = () => {
        setCancel(true)
    }

    const PomosContainer = () => {
        const Act = () => {
            const handleChange = event => {
                setActValue(event.target.value)
            }

            return (
                <input type='number' placeholder='0' value={actValue} onChange={handleChange} min='0'/>
            )
        }

        const EstPomosInput = () => {
            const handleChange = event => {
                setEastPomosValue(event.target.value)
            }

            return (
                <input type='number' placeholder='1' value={eastPomosValue} onChange={handleChange} min='0'/>
            )
        }

        return (
            <>
                <Act/>
                <span>/</span>
                <EstPomosInput/>
            </>
        )
    }

    return (
        <>
            <div className='task-container'>
                <div className='task-container__input-container'>
                    <input type='text' placeholder="Enter task's name" value={todo} onChange={event => setTodo(event.target.value)} className='task-container__item__input-name'/>
                    Act / Est Pomodoros
                    <div className='task-container__subitem__input-pomos'>
                        <PomosContainer/>
                    </div>
                    <div className='task-container__subitem__input-adds'>
                        {showNote?
                            <textarea className='task-container__note' value={note} onChange={event => setNote(event.target.value)}></textarea>
                            :
                            <button onClick={() => setShowNote(true)}>+ Add Note</button>
                        }
                        {showProject?
                            <div className='task-container__project-name'>Project: <input type='text' placeholder="Enter project's name" value={projectName} onChange={event => setProjectName(event.target.value)}/>
                            </div>
                            :
                            <button onClick={() => setShowProject(true)}>+ Add Project</button>
                        }
                    </div>
                </div>
                <div className='task-container__button-panel'>
                    <button onClick={() => remove}>Delete</button>
                    <div>
                        <button onClick={handleClickCancel}>Cancel</button>
                        <button type='submit' onClick={addTodo}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}